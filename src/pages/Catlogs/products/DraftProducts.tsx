import { Table } from "antd";
import { useEffect, useState } from "react";
import Addproduct from "./addproduct/Addproduct";
import { columnsType } from "./Published";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { product } from "../../../utils/types";
import { getDraft } from "../../../features/product/productSlice";

const columns = [
  {
    title: "Sr No",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
];

const DraftProducts = () => {
  const [formState, setFormState] = useState(false);
  const [productId, setProductId] = useState<string>();
  const [draft_product, setDraft_product] = useState<product>();
  const [data, setData] = useState<columnsType[]>([]);

  const [modal, setModal] = useState<{ x: number; y: number }>();

  const dispatch = useAppDispatch();
  const { products, isSuccess } = useAppSelector(
    (state) => state.products.draft
  );

  function handleContextMenu(
    e: React.MouseEvent<any, MouseEvent>,
    record: columnsType
  ) {
    e.preventDefault();
    !modal ? setModal({ x: e.pageX, y: e.pageY }) : setModal(undefined);
    setProductId(record.id);
  }

  function onEdit() {
    setFormState(true);
    setModal(undefined);
  }

  function onPublish() {}

  useEffect(() => {
    !isSuccess ? dispatch(getDraft()) : null;
  }, [dispatch, isSuccess]);

  useEffect(() => {
    setData([]);

    products.forEach((draft, i) => {
      setData((pre) => [
        ...pre,
        {
          key: i + 1,
          id: draft._id,
          title: draft.title,
          price: draft.price,
          category: draft.category.primary,
        },
      ]);
    });
  }, [products]);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    setDraft_product(product);
  }, [productId, products]);

  useEffect(() => {
    function clickHandler() {
      setModal(undefined);
    }

    addEventListener("click", clickHandler);
    return () => {
      removeEventListener("click", clickHandler);
    };
  });
  return (
    <div
      style={{
        overflow: "scroll",
        marginTop: "1rem",
      }}
    >
      {formState && productId && draft_product ? (
        <>
          <button
            onClick={() => {
              setFormState(false);
              setProductId(undefined);
            }}
            type="button"
          >
            back
          </button>
          <Addproduct
            data={JSON.parse(JSON.stringify(draft_product))}
            action="UPDATE"
          />
        </>
      ) : (
        <>
          <h3 className="mb-4 title">Products</h3>
          <div>
            {modal?.x && modal.y && (
              <div
                className="rounded-2 border border-3 border-primary d-flex flex-column row-gap-2 px-4 py-2 bg-secondary"
                style={{
                  zIndex: "10",
                  position: "absolute",
                  top: `${modal.y}px`,
                  left: `${modal.x}px`,
                }}
              >
                <button
                  type="button"
                  className="rounded-2"
                  onClick={() => onEdit()}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="rounded-2"
                  onClick={() => onPublish()}
                >
                  Publish
                </button>
              </div>
            )}
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: () => {
                    setModal(undefined);
                  },
                  onContextMenu: (e) => {
                    handleContextMenu(e, record);
                  },
                  onDoubleClick: () => {
                    setProductId(record.id);
                    setFormState(true);
                  },
                };
              }}
              // rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DraftProducts;
