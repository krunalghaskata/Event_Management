const Event = require("../../model/eventModel");

const listEvents = async (req, res) => {
  try {
    // pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Implement sorting by a field (e.g., date)
    const sortField = req.query.sortField || "date";
    const sortOrder = req.query.sortOrder || "asc";
    const sort = {};
    sort[sortField] = sortOrder === "asc" ? 1 : -1;

    //  date filtering
    const startDate = req.query.startDate || null;
    const endDate = req.query.endDate || null;
    const dateFilter = {};
    if (startDate && endDate) {
      dateFilter.date = { $gte: startDate, $lte: endDate };
    }

    //  search filtering
    const search = req.query.search || "";

    const events = await Event.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
      ...dateFilter,
    })
      .populate("organizer", "events")
      .skip(skip)
      .limit(1)
      .sort(sort);

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = listEvents;
