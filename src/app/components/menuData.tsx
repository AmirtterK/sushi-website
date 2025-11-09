import { MenuCategory, MenuData } from "../types/MenuCategory";

export const menuData: Record<MenuCategory, MenuData> = {
  sushi: {
    title: "Sushi",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Sushi Daurade",
        pieces: 2,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nigiri Saumon",
        pieces: 2,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nigiri Thon",
        pieces: 2,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nigiri Crevette",
        pieces: 2,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  hosomaki: {
    title: "Hosomaki",
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Maki Saumon",
        pieces: 6,
        price: 1000,
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maki Thon",
        pieces: 6,
        price: 1000,
        image:
          "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maki Avocat",
        pieces: 6,
        price: 800,
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  california: {
    title: "California",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Spicy Crab",
        pieces: 8,
        price: 1600,
        description: "Surimi Avocat Fromage",
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Tiger Roll",
        pieces: 8,
        price: 1600,
        description: "Avocat Crevette Fromage Le Th",
        image:
          "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Thon Roll",
        pieces: 8,
        price: 1700,
        description: "Avocat Mayonnaise Thon",
        image:
          "https://images.unsplash.com/photo-1617196035096-b18e7d7d0e5a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Chicken Roll",
        pieces: 8,
        price: 1200,
        description: "Poulet Avocat Fromage",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crunchy Futomaki",
        pieces: 5,
        price: 1300,
        description: "Avocat Fromage Surimi Crevette",
        image:
          "https://images.unsplash.com/photo-1615361200870-631376a652e2?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crispy Roll",
        pieces: 8,
        price: 1800,
        description: "Crevet Avocat Fromage Sumo",
        image:
          "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Fresh Salmon",
        pieces: 8,
        price: 1600,
        description: "Avocat Fromage Sumo",
        image:
          "https://images.unsplash.com/photo-1617196035183-421b4917c92d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  signature: {
    title: "Signature",
    image:
      "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Saumon Avocat Fromage",
        pieces: 8,
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Saumon Fromage",
        pieces: 8,
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1617196035183-421b4917c92d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hikaru Sushi",
        pieces: 8,
        price: 2500,
        description: "Saumon Avocat Concombre Œuf de Poisson",
        image:
          "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Cheeseburger Japanese",
        pieces: 1,
        price: 2600,
        image:
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dragon Roll",
        pieces: 8,
        price: 2700,
        description: "Fromage Crevette Avocat",
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maki Printemp",
        pieces: 8,
        price: 2200,
        description: "Fromage Crevette Avocat Frais de Riz",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  entree: {
    title: "Entrée",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Salade Thaï",
        pieces: 1,
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Salade de Chou",
        pieces: 1,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crevette Dynamite",
        pieces: 1,
        price: 1300,
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crevette Tempura",
        pieces: 4,
        price: 1300,
        image:
          "https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nems Poulet",
        pieces: 3,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1561158721-23e8b7297a8d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nems Crevette",
        pieces: 3,
        price: 700,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Miso Soup",
        pieces: null,
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1587277838115-d8f8c4d7e4f7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  brochettes: {
    title: "Brochettes",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Brochettes Yakitori Boeuf",
        pieces: 3,
        price: 750,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Brochettes Yakitori Fromage",
        pieces: 3,
        price: 1000,
        image:
          "https://images.unsplash.com/photo-1630409346144-a0c60662e67b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Brochettes Poulet",
        pieces: 3,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Brochettes Saumon",
        pieces: 3,
        price: 1100,
        image:
          "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  mixbox: {
    title: "Mix Box",
    image:
      "https://images.unsplash.com/photo-1563612116621-9c56e0f3a35e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Combo B1",
        pieces: 9,
        price: 2000,
        description: "4 California 3 Maki 2 Nigiri",
        image:
          "https://images.unsplash.com/photo-1563612116621-9c56e0f3a35e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Combo B2",
        pieces: 14,
        price: 2600,
        description: "4 California 3 Maki 5 Futomaki 2 Nigiri",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Combo D1",
        pieces: 28,
        price: 5000,
        description: "8 California 6 Maki 10 Crunchy 4 Nigiri",
        image:
          "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Familiale",
        pieces: 52,
        price: 9500,
        description:
          "8 California 8 Crispy 12 Maki 8 Nigiri 10 Futomaki 8 Tiger Rolls",
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  wok: {
    title: "Les Wok",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Légumes",
        pieces: null,
        price: 700,
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Poulet",
        pieces: null,
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Boeuf Légumes",
        pieces: null,
        price: 1400,
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crevettes Légumes",
        pieces: null,
        price: 1600,
        image:
          "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  streetfood: {
    title: "Street Food",
    image:
      "https://images.unsplash.com/photo-1563245372-f5d0f4e18b1c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Poulet Coréen",
        pieces: 1,
        price: 1800,
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Chirashi Saumon Avocat",
        pieces: 1,
        price: 2500,
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Street Boeuf Japanese",
        pieces: 1,
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Chicken Katsu",
        pieces: 1,
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Kiri Chicken Katsu",
        pieces: 1,
        price: 2200,
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Poke Saumon",
        pieces: 1,
        price: 2300,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  boisson: {
    title: "Boisson",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Eau Gazeuse Citronnée",
        pieces: null,
        price: 250,
        image:
          "https://plus.unsplash.com/premium_photo-1721780793069-5576631f1b46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mojito Classic",
        pieces: null,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Jus de Saison",
        pieces: null,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Canette",
        pieces: null,
        price: 200,
        image:
          "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Soda Fruit",
        pieces: null,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mojito Fruit",
        pieces: null,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
};