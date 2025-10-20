import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    url: { type: String, required: true },
    clicks: { type: Number, default: 0 },
    name: {type: String, required: true}
  });

// Reuse existing model if it’s already compiled (important for hot reloads)
export default mongoose.models.Url || mongoose.model("Url", UrlSchema);
