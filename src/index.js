import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCB9HKFbjxHlJNrEVcBIDSEv_jVU5gBwo4",
  authDomain: "spoounter.firebaseapp.com",
  projectId: "spoounter",
  storageBucket: "spoounter.appspot.com",
  messagingSenderId: "450750180299",
  appId: "1:450750180299:web:cea1e5a8daee104ca0a44e",
})

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const datesCol = collection(db, "dates")
const datesRef = doc(db, "dates", "dateList")
const snapShot = await getDocs(datesCol)

const datelist = snapShot.docs.map((doc) => doc.data())[0]

const email = "silviberat@gmail.com"
const password = "123456s"

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    // const user = userCredential.user

    // ...
    let counter = document.querySelector(".counter")
    let value = 0
    counter.innerText = value

    const newDate = new Date()
    const date = `${newDate.toLocaleDateString(
      "de-DE"
    )} - ${newDate.toLocaleTimeString()}`

    const bt1 = document.querySelector(".b1Time")
    const bt2 = document.querySelector(".b2Time")

    bt1.innerText = `${datelist.date1}`
    bt2.innerText = `${datelist.date2}`

    setInterval(async() => {
      if (datelist.date1 != bt1.innerText || bt2.innerText != datelist.date2) {
        window.location.reload()
      }
    }, 1000)
    window.addEventListener("click", async (e) => {
      if (e.target.className === "remove" && value > 0) value--

      if (e.target.className === "add") value = value + 1

      if (e.target.className === "b1" || e.target.className === "b1Time") {
        value = 0
        await updateDoc(datesRef, {
          date1: date,
        })
        window.location.reload()
      }

      if (e.target.className === "b2" || e.target.className === "b2Time") {
        value = 0
        await updateDoc(datesRef, {
          date2: date,
        })
        window.location.reload()
      }
      counter.innerText = value
    })
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    alert(`${errorCode}: ${errorMessage}`)
  })
