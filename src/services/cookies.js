import gradients from "../assets/data/gradients";

function getStyle(cookies) {
  const pageVisits =
    parseInt(cookies.get("pageVisits")) || cookies.set("pageVisits", 1);

  cookies.set("pageVisits", pageVisits + 1);

  let gradient = gradients.red;

  if ((pageVisits + 3) % 3 == 1) {
    gradient = gradients.red;
    return gradient;
  } else if ((pageVisits + 3) % 3 == 2) {
    gradient = gradients.purple;
    return gradient;
  } else {
    gradient = gradients.orange;
    return gradient;
  }
}

export { getStyle };
