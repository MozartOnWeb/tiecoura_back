import React, { useState, useEffect } from "react";

// Import Styles
import { Submit } from "../../styles/layout";
import { SingleBio } from "../../styles/biographieStyles";

// Import Firetore
import { fs } from "../../firebase";

const UpdateEmail = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

      const onEmailChange = (e) => setEmail(e.target.value);

      useEffect(() => {
        const serieRef = fs.collection("Contact").doc("02");

        serieRef.get().then((doc) => {
          let { email, name } = doc.data("02");
          setEmail(email);
          setName(name);
        });
      }, []);

      const onSend = () => {
        if (email) {
          fs.collection("Contact").doc("02").update({
            email: email,
          });
        }
      };
    
    return (
      <SingleBio>
        <p> {name} </p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
        <Submit onClick={onSend}>Mettre à jour</Submit>
      </SingleBio>
    );
}

export default UpdateEmail
