(function ($) {
  "use strict";

  // Navbar on scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".navbar").fadeIn("slow").css("display", "flex");
    } else {
      $(".navbar").fadeOut("slow").css("display", "none");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a, .btn-scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Scroll to Bottom
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-bottom").fadeOut("slow");
    } else {
      $(".scroll-to-bottom").fadeIn("slow");
    }
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Gallery carousel
  $(".gallery-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });

  $(document).on("click", '[data-toggle="modal"]', function () {
    var contentKey = $(this).data("content");
    var modalTitle = $("#exampleModalLongTitle");
    var modalImage = $("#modalImage");
    var modalContent = $("#modalContent");

    // Define content for each type
    var modalData = {
      solar: {
        title: "Solar Energy System",
        image: "img/gallery-6.jpg",
        content: `Solar panels are an innovative and sustainable solution for meeting energy needs in both commercial and residential settings. These devices harness sunlight to generate electricity, offering a clean, renewable, and cost-effective alternative to traditional energy sources. Solar panels are composed of photovoltaic (PV) cells that convert sunlight into electricity, which can be used to power homes, offices, and industrial facilities. By reducing dependence on fossil fuels, solar panels help lower carbon footprints while providing significant long-term savings on energy bills.

					For residential use, solar panels allow homeowners to produce their own electricity, often generating enough to power appliances, lighting, and heating systems. Excess energy can be stored in batteries or fed back into the grid through net metering, potentially offsetting energy costs further. Many residential users install solar panels to achieve energy independence, reduce utility expenses, and contribute to a greener environment. Moreover, modern solar panel systems are designed to be aesthetically pleasing, seamlessly blending with rooftops.
					
					In commercial applications, solar panels are a cost-efficient way for businesses to reduce operational expenses and demonstrate a commitment to sustainability. Large-scale installations on rooftops or open spaces can provide substantial energy output, helping companies meet their energy needs while lowering greenhouse gas emissions. Tax incentives, government grants, and renewable energy credits make solar panel systems even more attractive for commercial enterprises.
					
					With advancements in solar technology, such as higher efficiency rates and better energy storage solutions, solar panels have become more accessible and reliable than ever before. They represent a smart investment for property owners seeking to embrace sustainable practices, cut costs, and increase the value of their properties while making a positive impact on the environment. Solar energy is not just a trend but a transformative approach to powering the future.`,
      },
      locks: {
        title: "Smart Locks",
        image: "img/smart-locks.jpg",
        content: `Smart home locks are advanced security devices that combine convenience, safety, and cutting-edge technology to provide homeowners with a seamless way to control and monitor access to their homes. Unlike traditional locks that rely solely on physical keys, smart locks integrate electronic mechanisms with wireless communication technologies, allowing users to lock and unlock their doors using smartphones, keypads, biometrics, or voice commands. These locks often connect to a home’s Wi-Fi or Bluetooth system, enabling remote access and real-time monitoring. With a smart lock, homeowners can grant or revoke access to visitors, track entry logs, and receive notifications about any unauthorized attempts to access the property. This level of control not only enhances security but also adds a significant layer of convenience for modern lifestyles.

				One of the most attractive features of smart home locks is their ability to eliminate the need for physical keys. Losing keys or getting locked out becomes a thing of the past when you can use a smartphone app or a custom PIN code to enter your home. For families, this is particularly beneficial, as parents can assign unique access codes to each family member and monitor when they arrive or leave the house. Smart locks can also be programmed to work with temporary codes for guests, cleaners, or delivery personnel, which expire after a set period. This feature is particularly useful for Airbnb hosts and rental property owners, as it provides a secure way to manage access without needing to physically hand over keys.
				
				Another key advantage of smart locks is their integration with smart home ecosystems. They can be paired with other devices, such as security cameras, doorbell cameras, and alarm systems, creating a comprehensive security solution. For example, when someone unlocks the door, the system can trigger cameras to start recording or send a notification to the homeowner’s phone. Many smart locks also support voice control through virtual assistants like Amazon Alexa, Google Assistant, or Apple Siri, allowing users to lock or unlock doors with simple voice commands. Additionally, some advanced models use geofencing technology, automatically locking or unlocking the door when a paired smartphone enters or exits a designated perimeter around the home.
				
				In terms of security, smart locks are designed with advanced encryption to prevent hacking and unauthorized access. Many models feature fail-safes, such as backup physical keys or battery alerts, to ensure functionality during power outages or low battery situations. Biometric models add an extra layer of security by using fingerprint or facial recognition technology, making it nearly impossible for intruders to bypass the lock. These features reassure homeowners that their property and loved ones are well-protected.
				
				Smart home locks also provide a stylish and modern aesthetic, often designed to complement contemporary interiors. With sleek finishes and customizable features, they enhance the overall appearance of the entryway. As technology continues to evolve, smart locks are becoming more affordable and accessible, making them a popular choice for homeowners looking to upgrade their security systems. Their combination of convenience, safety, and sophistication makes smart locks an essential component of any modern smart home, offering peace of mind and control at your fingertips.`,
      },
      charger: {
        title: "EV Charger",
        image: "img/ev-charging.webp",
        content: `Home EV charging stations offer a convenient and efficient way for electric vehicle owners to power their cars, ensuring they are always ready for use. These charging systems are designed to provide a seamless at-home solution, eliminating the need for frequent trips to public charging stations. With a home charging setup, EV owners can simply plug in their vehicles overnight or during the day, taking advantage of lower electricity rates during off-peak hours and enjoying the convenience of starting each day with a fully charged battery.

				Home EV chargers come in different levels, with Level 2 chargers being the most popular for residential use. These chargers provide faster charging times compared to a standard wall outlet, typically replenishing a vehicle's battery in just a few hours. Many models are equipped with smart features, such as Wi-Fi connectivity and mobile apps, allowing users to monitor charging sessions, schedule charging times, and even integrate with solar panels or smart home systems for optimized energy use.
				
				The installation of a home EV charging station enhances the overall ownership experience of an electric vehicle. It provides flexibility, as homeowners can charge their cars at their convenience, without relying on the availability of public charging infrastructure. Additionally, home charging stations are often compatible with incentives or tax credits, reducing installation costs and making the transition to EVs more affordable.
				
				With growing awareness of environmental sustainability and the increasing adoption of electric vehicles, home EV chargers are becoming a key component of modern households. They not only offer cost savings but also contribute to reducing carbon emissions by supporting the shift to cleaner transportation. For EV owners, installing a home charging station is an investment in convenience, efficiency, and a sustainable future.`,
      },
    };

    // Set the modal content
    var data = modalData[contentKey];
    if (data) {
      modalTitle.text(data.title);
      modalImage.attr("src", data.image);
      modalContent.text(data.content);
    }
  });
})(jQuery);
