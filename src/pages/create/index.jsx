import React, { useEffect, useState } from 'react';
import { HiOutlineUpload } from "react-icons/hi";
export default function Create() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fileInput = document.querySelector(".file-input");
    const form = document.querySelector("form");
    const progressArea = document.querySelector(".progress-area");
    const uploadedArea = document.querySelector(".uploaded-area");

    if (fileInput) {
      fileInput.addEventListener("change", handleFileChange);
    }

    function handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const fileName = file.name.length >= 12 ? `${file.name.substring(0, 13)}...${file.name.split('.').pop()}` : file.name;
        uploadFile(file, fileName);
      }
    }

    function uploadFile(file, name) {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();
      formData.append('file', file);

      xhr.open("POST", "php/upload.php");

      xhr.upload.addEventListener("progress", ({ loaded, total }) => {
        const fileLoaded = Math.floor((loaded / total) * 100);
        const fileSize = (total < 1024) ? total + " B" : (loaded / (1024 * 1024)).toFixed(2) + " MB";
        const progressHTML = `<li class="row">
                                <i class="fas fa-file-alt"></i>
                                <div class="content">
                                  <div class="details">
                                    <span class="name">${name} • Uploading</span>
                                    <span class="percent">${fileLoaded}%</span>
                                  </div>
                                  <div class="progress-bar">
                                    <div class="progress" style="width: ${fileLoaded}%"></div>
                                  </div>
                                </div>
                              </li>`;
        progressArea.innerHTML = progressHTML;
      });

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = xhr.responseText;
          const uploadedHTML = `<li class="row">
                                  <div class="content upload">
                                    <i class="fas fa-file-alt"></i>
                                    <div class="details">
                                      <span class="name">${name} • Uploaded</span>
                                      <span class="size">${fileSize}</span>
                                    </div>
                                  </div>
                                  <i class="fas fa-check"></i>
                                </li>`;
          uploadedArea.innerHTML = uploadedHTML + uploadedArea.innerHTML;
        } else {
          uploadedArea.innerHTML = "<p>Failed to upload file</p>";
        }
      };

      xhr.onerror = () => {
        uploadedArea.innerHTML = "<p>Failed to upload file: Network error</p>";
      };

      xhr.send(formData);
    }
  }, []); // Empty dependency array means this effect runs once after the first render

  const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const textarea = document.querySelector("textarea");
    const button = document.querySelector("button");
    let isSpeaking = true;
    const text = textarea.value;

    if (!synth.speaking && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }

    if (text.length > 50) {
      if (synth.speaking && isSpeaking) {
        button.innerText = "Pause";
        synth.resume();
        isSpeaking = false;
      } else {
        button.innerText = "Resume";
        synth.pause();
        isSpeaking = true;
      }
    } else {
      isSpeaking = false;
      button.innerText = "Speaking";
    }
  };

  const handleButtonClick = () => {
    textToSpeech();
  };

  return (
    <div className="popUp">
      <div className="createDiv">
        <div className="wrapper">
          <header>Create Post</header>
          <form>
            {/* Hidden file input */}
            <input id="file-input" className="file-input" type="file" name="file" style={{ display: 'none' }} />
            {/* Custom button to trigger file input */}
            <label htmlFor="file-input" className="file-label">
              <i className="fas fa-cloud-upload-alt"></i>
              <HiOutlineUpload className='uploadIcon'/>
              <p>Browse File to Upload</p>
            </label>
          </form>
          <section className="progress-area"></section>
          <section className="uploaded-area"></section>
        </div>
        <div className="container1">
          <header>Enter a caption here</header>
          <textarea placeholder="Enter text" className='captionText'></textarea>
          <button onClick={handleButtonClick} className='testbtn'>Submit</button>
        </div>
      </div>
    </div>
  );
}
