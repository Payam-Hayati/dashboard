import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Box from "@mui/material/Box";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function createData(
  name: string,
  calories: string,
  fat: string,
  address: string
) {
  return { name, calories, fat, address };
}

const rows = [
  createData(
    "پیام حیاتی",
    "payam.hayati@yahoo.com",
    "09371464764",
    "Tehran-Iran"
  ),
  createData(
    "پویا حیاتی",
    "payam.hayati@yahoo.com",
    "09371464764",
    "Tehran-Iran"
  ),
  createData(
    "رضا احمدی",
    "payam.hayati@yahoo.com",
    "09371464764",
    "Tehran-Iran"
  ),
  createData(
    "علی ارزشمند",
    "payam.hayati@yahoo.com",
    "09371464764",
    "Tehran-Iran"
  ),
  createData(
    "پریسا افتخاری",
    "payam.hayati@yahoo.com",
    "09371464764",
    "Tehran-Iran"
  ),
];

export default function DenseTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <TableContainer component={Paper} className="rounded-lg mt-2">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">نام و نام خانوداگی</TableCell>
              <TableCell align="center">ایمیل</TableCell>
              <TableCell align="center">شماره تماس</TableCell>
              <TableCell align="center"> آدرس</TableCell>
              <TableCell align="center"> پردازش</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  className="text-gray-200"
                >
                  {row.name}
                </TableCell>
                <TableCell align="center" className="text-gray-200">
                  {row.calories}
                </TableCell>
                <TableCell align="center" className="text-gray-200">
                  {row.fat}
                </TableCell>
                <TableCell align="center" className="text-gray-200">
                  {row.address}
                </TableCell>
                <TableCell align="center" className="text-gray-100">
                  {/* <Button onClick={handleOpen}>Open modal</Button> */}
                  <BorderColorOutlinedIcon
                    className="text-[#8BC34A] dark:text-[#8BC34A] text-[20px]"
                    onClick={handleOpen}
                  />
                  <DeleteOutlineOutlinedIcon
                    className="text-[#D71635] dark:text-[#D71635] text-[20px]"
                    onClick={handleOpen}
                  />

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        className="text-gray-50 text-right"
                      >
                        <span className="mr-2">پردازش اطلاعات</span>
                        <ReportOutlinedIcon className="text-yellow-500" />
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        className="text-gray-50 text-right"
                      >
                        <span>آیا از ویرایش یا حذف اطلاعات اطمنیان دارید؟</span>

                        <div className="flex mt-2 gap-2">
                          <div className="flex-1 bg-red-700 cursor-pointer text-center rounded-md p-2">
                            بله
                          </div>
                          <div className="flex-1 bg-green-700 cursor-pointer text-center rounded-md p-2">
                            خیر
                          </div>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
