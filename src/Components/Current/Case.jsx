export default function Case() {
  try {
    ClientSchema.parse({ firstname: "John", lastname: "  " });
  } catch (err) {
    console.log(err.errors);
  }

  return <div className="">Case</div>;
}
