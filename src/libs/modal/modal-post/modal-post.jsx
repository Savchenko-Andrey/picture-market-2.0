"use client"
import { useState } from "react";
import styles from "./modal-post.module.scss"

export default function ModalPost({setIsModalForm}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    handleToggleForm();

    if (!name || !email || !message) {
    } else {
      axios
        .post('https://postapi.onrender.com/api/sendinfo', {
          name,
          email,
          message,
        })
        .then(res => console.log(res.data));
    }
  };
  return (
        <div className={styles.container}>
          <div className={styles.modal}>
            <div className={styles.closed} onClick={()=> setIsModalForm(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="black" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
            </div>
            <div className={styles.container_content}>
              <p className={styles.title}>Please add your review</p>
          
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Name"
                  required
                  onChange={e => setName(e.target.value)}
                />

                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  name="Email"
                  value={email}
                  placeholder="Email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              <textarea
                  className={styles.textarea}
                  onChange={e => setMessage(e.target.value)}
                  value={message}
                  name="textarea"
                  id="textarea"
                  required
                  placeholder="Message"
                ></textarea>

                <button className={styles.btn} type="submit">send</button>
              </form>
            </div>
        </div>
      </div>
  )
}