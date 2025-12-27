const productsData = [
  { name:"7 Pole Connector", category:"spares", image:"assets/images/7 POLE CONNECTOR.jpeg" },
  { name:"Air Pressure Switch", category:"spares", image:"assets/images/AIR PRESSURE SWITCH.jpeg" },
  { name:"Air Pressure Switches", category:"spares", image:"assets/images/AIR PRESSURE SWITCHES.png" },
  { name:"Base Plate", category:"spares", image:"assets/images/BASE PLATE.jpeg" },
  { name:"Blower Motor", category:"burners", image:"assets/images/BLOWER MOTOR.jpeg" },
  { name:"Blower Wheel Fan", category:"burners", image:"assets/images/BLOWER WHEEL_FAN.jpeg" },
  { name:"Brahma Solenoid Valve", category:"burners", image:"assets/images/BRAHMA SOLENOID VALVE.jpeg" },
  { name:"Burner Blower Motor", category:"burners", image:"assets/images/BURNER BLOWER MOTOR.jpeg" },
  { name:"Burner Controller", category:"burners", image:"assets/images/BURNER CONTROLLER.jpeg" },
  { name:"Burner Electrode", category:"spares", image:"assets/images/BURNER ELECTRODE.jpeg" },
  { name:"Cofi Transformer", category:"spares", image:"assets/images/COFI TRANSFORMER.jpeg" },
  { name:"Coupling", category:"spares", image:"assets/images/COUPLING.jpeg" },
  { name:"Danfoss Fuel Pump", category:"burners", image:"assets/images/DANFOSS FUEL PUMP.jpeg" },
  { name:"Danfoss Nozzle", category:"spares", image:"assets/images/DANFOSS NOZZLE.jpeg" },
  { name:"Diffuser Disc", category:"spares", image:"assets/images/DIFFUSER DISC.jpeg" },
  { name:"Dungs Multiblock", category:"burners", image:"assets/images/DUNGS MULTIBLOCK.jpeg" },
  { name:"Electrode Cap", category:"spares", image:"assets/images/ELECTRODE CAP.jpeg" },
  { name:"Fuel Pump", category:"burners", image:"assets/images/FUEL PUMP.jpeg" },
  { name:"Gas Filter", category:"burners", image:"assets/images/GAS FILTER.jpeg" },
  { name:"Gas Hose Pipe", category:"burners", image:"assets/images/GAS HOSE PIPE.jpeg" },
  { name:"Gas Pressure Switch", category:"spares", image:"assets/images/GAS PRESSURE SWITCH.jpeg" },
  { name:"Gas Solenoid Valve", category:"burners", image:"assets/images/GAS SOLENOID VALVE.jpeg" },
  { name:"H Type Electrode", category:"spares", image:"assets/images/H TYPE ELECTRODE.jpeg" },
  { name:"HT Cable", category:"spares", image:"assets/images/HT CABLE.jpeg" },
  { name:"HT Lead", category:"spares", image:"assets/images/HT LEAD.jpeg" },
  { name:"Ignition Transformer", category:"spares", image:"assets/images/IGNITION TRANSFORMER.jpeg" },
  { name:"Indian Burner Controller", category:"burners", image:"assets/images/INDIAN BURNER CONTROLLER.jpeg" },
  { name:"Photocell", category:"spares", image:"assets/images/PHOTOCELL.jpeg" },
  { name:"Pressure Gauges", category:"spares", image:"assets/images/PRESSURE GUAGES.JPG" },
  { name:"QRA2", category:"spares", image:"assets/images/QRA2.jpeg" },
  { name:"Refractory Material", category:"furnaces", image:"assets/images/REFRACTORY MATERIAL.jpeg" },
  { name:"SiC Tubes", category:"furnaces", image:"assets/images/SIC TUBES.JPG" },
  { name:"Silicon Carbide Skid", category:"furnaces", image:"assets/images/SILICONN CARBIDE SKID.jpeg" },
  { name:"Solenoid Coil", category:"spares", image:"assets/images/SOLENOID COIL.jpeg" },
  { name:"Solenoid Valves", category:"burners", image:"assets/images/SOLENOID VALVES.jpeg" },
  { name:"Spark Plug", category:"spares", image:"assets/images/SPARK PLUG.JPG" },
  { name:"Spark Plug Set", category:"spares", image:"assets/images/SPARK PLUG 2.JPG" },
  { name:"Thermocouples", category:"spares", image:"assets/images/THERMOCOUPLES.jpeg" },
  { name:"UV Sensor", category:"spares", image:"assets/images/UV CENSOR.jpeg" },
  { name:"UVZ Photocell", category:"spares", image:"assets/images/UVZ PHOTOCELL.jpeg" },
  { name:"VOT Pigtail Pipe", category:"burners", image:"assets/images/VOT PIGTAIL PIPE.jpeg" }
];

const grid = document.getElementById("productGrid");

function renderProducts(filter = "all") {
  grid.innerHTML = "";

  productsData.forEach(p => {
    if (filter === "all" || p.category === filter) {
      grid.innerHTML += `
        <div class="bg-white rounded-xl shadow hover:shadow-xl transition group">
          <div class="relative p-4">
            <span class="absolute top-3 left-3 text-xs bg-primary text-white px-2 py-1 rounded">
              ${p.category.toUpperCase()}
            </span>
            <img src="${p.image}"
                 class="h-40 w-full object-contain group-hover:scale-105 transition">
          </div>

          <div class="p-4 border-t">
            <h3 class="font-semibold mb-3">${p.name}</h3>
            <button
              onclick="openModal('${p.name}','${p.image}')"
              class="w-full bg-accent text-white py-2 rounded">
              Enquire on WhatsApp
            </button>
          </div>
        </div>`;
    }
  });
}

renderProducts();

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.onclick = () => renderProducts(btn.dataset.filter);
});

const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const whatsappLink = document.getElementById("whatsappLink");

function openModal(title, image) {
  modalTitle.textContent = title;
  modalImage.src = image;
  whatsappLink.href =
    `https://wa.me/919881193467?text=${encodeURIComponent(
      "Hello GC Thermal Systems, I am interested in " + title
    )}`;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
