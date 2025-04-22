
import { upload } from "lucide-react";

const ManualUpload = () => (
  <div className="max-w-xl mx-auto py-10">
    <div className="flex gap-3 items-center mb-6">
      <upload className="h-7 w-7 text-primary" />
      <h2 className="text-2xl font-bold">Manual Data Upload</h2>
    </div>
    <p className="text-muted-foreground mb-6">
      Upload your ITSM data manually via file upload (CSV, XLS).
    </p>
    <div className="border rounded-xl p-5 bg-white">
      <div className="font-medium mb-2">Upload Data File</div>
      <input type="file" className="block mb-4" disabled />
      <button className="bg-primary text-white px-4 py-2 rounded font-medium cursor-not-allowed opacity-60" disabled>
        File Upload (Coming Soon)
      </button>
    </div>
  </div>
);

export default ManualUpload;
