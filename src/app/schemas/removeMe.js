import mongoose from 'mongoose';

const YourSchema = new mongoose.Schema({
  /**
   * add here your colletion attribute
   */
});

export default mongoose.model('COLLECTION_NAME', YourSchema);
