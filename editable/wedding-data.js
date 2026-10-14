/**
 * wedding-data.js — Customer-facing editable data layer for seashell-vows
 * Namratha V & Srihari W Wedding & Reception Invitation
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Srihari W",
    bride: "Namratha V",
    tagline: "Together with our families",
    brideParents: "A Sandhya Prasad & R Venkatesh Prasad",
    groomParents: "Sumana T & Surendranath W",
    compliments: "Amrutha V",
  },

  wedding: {
    dateLabel: "25 & 26 November 2026",
    weddingDateLabel: "Thursday, 26 November 2026",
    receptionDateLabel: "Wednesday, 25 November 2026",
    weddingISO: "2026-11-26T09:15:00+05:30",
  },

  venue: {
    name: "Brigade MLR Convention Centre",
    address: "7th Phase, J.P Nagar, Bengaluru - 560078",
    mapsUrl: "https://maps.app.goo.gl/3J1Rpe2PmLkNjE8T7?g_st=ic",
  },

  events: [
    {
      name: "Reception",
      glyph: "❖",
      date: "Wednesday, 25 Nov 2026",
      time: "7:00 PM onwards",
      venue: "Brigade MLR Convention Centre",
      note: "7th Phase, J.P Nagar, Bengaluru - 560078",
    },
    {
      name: "Wedding (Muhurtham)",
      glyph: "☀",
      date: "Thursday, 26 Nov 2026",
      time: "9:15 AM to 10:00 AM",
      venue: "Brigade MLR Convention Centre",
      note: "Dhanur Lagna · 7th Phase, J.P Nagar, Bengaluru - 560078",
    },
  ],

  eventDates: {
    Reception: "2026-11-25T19:00:00+05:30",
    "Wedding (Muhurtham)": "2026-11-26T09:15:00+05:30",
  },

  endSection: {
    brideParents: "A Sandhya Prasad & R Venkatesh Prasad",
    groomParents: "Sumana T & Surendranath W",
    compliments: "Amrutha V",
  },

  images: {
    monogram: "./editable/assets/monogram.png",
    couple: "./editable/assets/couple-walking.png",
    hero: "./editable/assets/hero-arch.jpg",
    venueMap: "./editable/assets/venue-map-Wf_iSDI1.jpg",
    footerWash: "./editable/assets/footer-wash-DG1rtX_C.jpg",
    openerVideo: "./editable/assets/wedding-opener.mp4",
  },

  music: {
    src: "./editable/assets/bgm.mp3",
    title: "A Thousand Years",
    autoplay: true,
  },
};
