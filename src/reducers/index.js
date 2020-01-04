import { combineReducers } from 'redux';
import { slidesForSlider } from "./slides.js";
import { infoForBlocks } from "./info.js";
import { dataForGraph } from "./graph.js";
import { dataForServices } from "./services.js";
import { statsForStatistic } from "./statistic.js";
import { reviewsForTestimonials } from "./reviews.js";
import { contactsForContact } from "./contacts.js";
import { stateModal } from "./modal.js";


const rootReducer = combineReducers({
  slidesForSlider,
  infoForBlocks, 
  dataForGraph,
  dataForServices,
  statsForStatistic,
  reviewsForTestimonials,
  contactsForContact,
  stateModal
});

export default rootReducer;