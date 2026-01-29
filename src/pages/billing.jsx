import "../styles/billing.css";

export default function Billing() {
  return (
    <div className="billing-page">

    {/* NAVBAR */}
<header className="billing-navbar">
  {/* LEFT: App Name */}
  <div className="font-semibold text-blue-600 text-lg">
    Quotation
  </div>

  {/* RIGHT: Actions + Profile */}
  <div className="ml-auto flex items-center gap-4">
    <button className="billing-nav-btn">Add Category</button>
    <button className="billing-nav-btn">Add Item</button>
    <button className="billing-nav-btn">Add Employee</button>
    <button className="billing-nav-btn">Orders</button>

    <button className="billing-nav-btn font-medium">
      Profile ⌄
    </button>
  </div>
</header>


      {/* MAIN CONTENT */}
      <main className="billing-content">

        {/* CUSTOMER DETAILS — LEFT */}
        <section className="card col-span-4">
          <h2 className="card-title">Customer Details</h2>

          <div className="space-y-3">
            <input
              className="input"
              placeholder="Customer Name"
            />

            <input
              className="input"
              placeholder="Phone Number"
              disabled
            />

            <input
              className="input"
              placeholder="Employee"
            />
          </div>
        </section>

        {/* ITEM LIST — RIGHT (MAIN AREA) */}
        <section className="card col-span-8">
          <h2 className="card-title">Item List</h2>

          {/* Filter row */}
          <div className="flex gap-3 mb-4">
            <select className="input w-40">
              <option>All Categories</option>
            </select>

            <input
              className="input flex-1"
              placeholder="Search item by name"
            />
          </div>

          {/* Table header */}
          <div className="item-header">
            <div className="col-span-5">Item</div>
            <div className="col-span-3">Price</div>
            <div className="col-span-2">Qty</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* Empty state */}
          <div className="text-sm text-gray-500 mt-6 text-center">
            Start typing to add items
          </div>
        </section>

        {/* BILLING SUMMARY — BOTTOM FULL WIDTH */}
        <section className="card col-span-12 ">
          <div className="flex justify-between text-sm mb-3">
            <span>Total Items</span>
            <span>0</span>
          </div>

          <div className="flex justify-between text-sm mb-3">
            <span>Subtotal</span>
            <span>₹0.00</span>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm">GST</span>
            <select className="input w-24">
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <div className="flex justify-between font-semibold text-base mb-4">
            <span>Total</span>
            <span>₹0.00</span>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Print Receipt
          </button>
        </section>

      </main>
    </div>
  );
}
