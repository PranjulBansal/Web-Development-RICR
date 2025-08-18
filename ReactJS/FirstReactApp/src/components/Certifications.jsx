import React from "react";
import blockchain from "../assets/blockchain.webp"
import cyber from "../assets/cyber.webp";
import certificate from "../assets/certificate.png"
function Certifications() {
  return (
    <>
   
      <div className="container-fluid ">
        <div className="d-flex gap-2 justify-content-center">
                  <img  src={certificate} alt="" className="my-4" />
                  <h1 className="text-black" id="certificateHead">Certifications</h1>
                </div>
         
         <div className="d-flex gap-4 my-5">
        <div><h1 className="text-black mx-5 my-5 ">BlockChain Technology</h1>
        <p className="mx-5 fs-5">In blockchain technology, each transaction is grouped into blocks, which are then linked together, forming a secure and transparent chain. This structure guarantees data integrity and provides a tamper-proof record, making blockchain ideal for applications like cryptocurrencies and supply chain management</p>
        <p className="mx-5 fs-4 text-black">I got certification in blockchain technology</p>
        </div>
        <div><img src={blockchain} alt="" /></div>
      </div>
       <div className="d-flex gap-4 my-5">
         <div><img src={cyber} alt="" className="h-100 w-100"/></div>
        <div><h1 className="text-black mx-5 my-5 ">Cyber Security</h1>
        <p className="mx-5 fs-5">Cyber security refers to the methods, processes, and technologies used to protect computer systems, networks, and data from cyber threats and unauthorized access. It encompasses a wide range of practices designed to safeguard digital assets from various attacks, including hacking, malware, and phishing. Effective cyber security is crucial for individuals and organizations to mitigate risks and ensure the confidentiality, integrity, and availability of their information</p>
        <p className="mx-5 fs-4 text-black">I got certification in cyber security technology</p>
        </div>
       
      </div>
      </div>
    </>
  );
}
export default Certifications;
