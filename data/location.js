const locationInfo = {
  address: "1051 Nipomo St San Luis Obispo, CA 93401",
  hoursOfOperation: {
    weekday: "8am-6pm",
    weekend: "8am-10pm",
  },
  contactInfo: {
    email: "contact@mycuisine.com",
    telephone: "343-233-5533",
    fax: "432-456-6642",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862807.9997404825!2d88.86462817500002!3d24.231393359296607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f120c291d33%3A0xaa228b65bff6e654!2sSwadhin%20Sutradhar!5e0!3m2!1sen!2sbd!4v1752349894324!5m2!1sen!2sbd",
};
export const { address, hoursOfOperation, contactInfo, mapEmbedUrl } = {
  ...locationInfo,
};
