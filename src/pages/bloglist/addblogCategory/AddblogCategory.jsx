import CustomInput from "../../../components/custominput/CustomInput";
import "./addblogcategory.css";

const AddblogCategory = () => {
  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      <h3 className="mb-4 title">Add Blog Category</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Blog Category" />
          <button
            className="btn btn-success border-0  rounded-3 my-4"
            type="submit"
          >
            Add Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddblogCategory;
