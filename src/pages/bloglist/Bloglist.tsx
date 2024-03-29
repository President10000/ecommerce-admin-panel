import { Table } from "antd";
const columns = [
  {
    title: "Sr No",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1: { key: number; name: string; product: number; status: string }[] =
  [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Bloglist = () => {
  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      <h3 className="mb-4 title">Blogs List</h3>
      <div>
        {" "}
        <Table
          // rowSelection={rowSelection}
          columns={columns}
          dataSource={data1}
        />
      </div>
    </div>
  );
};

export default Bloglist;
