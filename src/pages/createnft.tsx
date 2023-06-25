/** @format */

import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { Web3Storage } from "web3.storage";
import deployer from "../../deployer_abi.json";
import { ethers } from "ethers";
import { selectUserInstance } from "../store/slices/user.slice";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_WEB3_STORAGE_KEY;
const deployerContract = import.meta.env.VITE_NFT_DEPLOYER;
const Createnft = () => {
  const navigate = useNavigate();
  const { user }: any = useAppSelector(selectUserInstance);
  const [nft_name, setNFTName] = useState("");
  const [nft_symbol, setNFTSymbol] = useState("");
  const [nft_description, setNFTDescription] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const createItem = "Create your item";
  const loading = "Loading...";

  const [loadingPlace, setLoadingPlace] = useState(createItem);
<<<<<<< HEAD
  const imageDom = useRef(document.getElementById("root") as HTMLElement);
=======
  const imageDom = useRef(document.getElementById("root") as HTMLInputElement);
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader: any = new FileReader();

      reader.onload = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  function makeStorageClient() {
    return new Web3Storage({ token: apiKey });
  }

  async function uploadMetaData() {
    const client = makeStorageClient();
    const imageFile = imageDom.current.files;

    if (imageFile?.length != 1) {
      alert("Please select one image");
      return;
    }
    const cidImage = await client.put(imageFile, { wrapWithDirectory: false });

    const obj = {
      image: `ipfs://${cidImage}`,
      name: nft_name,
      description: nft_description,
    };
    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

    const files = [new File([blob], "hello.json")];
    const cid = await client.put(files, { wrapWithDirectory: false });
    console.log("stored files with cid:", cid);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(deployerContract, deployer, signer);
<<<<<<< HEAD
    const address = await signer.getAddress();
    console.log(address);
=======
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
    const mintNFTR = await contract.mintNFT(
      nft_name,
      nft_symbol,
      unitPrice,
<<<<<<< HEAD
      `ipfs://${cid}`,
      address.trim()
    );
    alert(`NFT created, view on blockexplorer ${mintNFTR.hash}`);

    return cid;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loadingPlace == loading) {
      return;
    }
    if (nft_name.trim() == "") {
      alert("NFT name can not be empty");
      return;
    }
    if (nft_symbol.trim() == "") {
      alert("NFT symbol can not be empty");
      return;
    }
    if (nft_description.trim() == "") {
      alert("NFT description can not be empty");
      return;
    }

    try {
      setLoadingPlace(loading);
      await uploadMetaData();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoadingPlace(createItem);
    }
  };

  return (
    <div className="wrapper">
      <main>
        <div
          className="section bg-cover py-6 h-px-150px bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/assets/img/ai-img-7.png)" }}
        >
          <div className="container text-center">
            <h1 className="text-white m-0">Create House NFT</h1>
          </div>
        </div>
        {user._id ? (
          <section className="section">
            <div className="container">
              <div className="row gy-5">
                <div className="col-md-8">
                  <div className="card border-gray-200 rounded-3">
                    <div className="card-body p-lg-4">
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="row gy-4">
                          <div className="col-12">
                            <label className="form-label">Upload file</label>
                            <div className="h-px-150px rounded d-flex align-items-center p-4 justify-content-center d-flex position-relative border border-2 border-gray-300 rounded-3">
                              <div className="pe-none d-flex align-items-center justify-content-center flex-column">
                                <div className="icon-md bg-gray-300 rounded-circle">
                                  <i className="bi-upload"></i>
                                </div>
                                <p className="m-0 pt-3 fs-sm">
=======
      `ipfs://${cid}`
    );
    alert(`NFT created, view on blockexplorer ${mintNFTR.hash}`);

    // const contract = new web3.eth.Contract(contractABI, contractAddress);

    return cid;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loadingPlace == loading) {
      return;
    }
    if (nft_name.trim() == "") {
      alert("NFT name can not be empty");
      return;
    }
    if (nft_symbol.trim() == "") {
      alert("NFT symbol can not be empty");
      return;
    }
    if (nft_description.trim() == "") {
      alert("NFT description can not be empty");
      return;
    }

    try {
      setLoadingPlace(loading);
      await uploadMetaData();
    } catch (error) {
    } finally {
      setLoadingPlace(createItem);
    }
  };

  return (
    <div className='wrapper'>
      <main>
        <div
          className='section bg-cover py-6 h-px-150px bg-no-repeat bg-center'
          style={{ backgroundImage: "url(/assets/img/ai-img-7.png)" }}>
          <div className='container text-center'>
            <h1 className='text-white m-0'>Create House NFT</h1>
          </div>
        </div>
        {user._id ? (
          <section className='section'>
            <div className='container'>
              <div className='row gy-5'>
                <div className='col-md-8'>
                  <div className='card border-gray-200 rounded-3'>
                    <div className='card-body p-lg-4'>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='row gy-4'>
                          <div className='col-12'>
                            <label className='form-label'>Upload file</label>
                            <div className='h-px-150px rounded d-flex align-items-center p-4 justify-content-center d-flex position-relative border border-2 border-gray-300 rounded-3'>
                              <div className='pe-none d-flex align-items-center justify-content-center flex-column'>
                                <div className='icon-md bg-gray-300 rounded-circle'>
                                  <i className='bi-upload'></i>
                                </div>
                                <p className='m-0 pt-3 fs-sm'>
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                                  {" "}
                                  JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
                                  GLB, GLTF. Max size: 150 MB{" "}
                                </p>
                              </div>
                              <input
                                ref={imageDom}
<<<<<<< HEAD
                                className="position-absolute top-0 end-0 start-0 bottom-0 opacity-0"
                                type="file"
                                name="nft_image"
                                onChange={handleImageChange}
                                accept="image/*"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              name="nft_name"
                              className="form-control"
                              placeholder="Enter name"
=======
                                className='position-absolute top-0 end-0 start-0 bottom-0 opacity-0'
                                type='file'
                                name='nft_image'
                                onChange={handleImageChange}
                                accept='image/*'
                              />
                            </div>
                          </div>
                          <div className='col-12'>
                            <label className='form-label'>Name</label>
                            <input
                              type='text'
                              name='nft_name'
                              className='form-control'
                              placeholder='Enter name'
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                                setNFTName(e.target.value)
                              }
                            />
                          </div>
<<<<<<< HEAD
                          <div className="col-12">
                            <label className="form-label">Symbol</label>
                            <input
                              type="text"
                              name="nft_symbol"
                              className="form-control"
                              placeholder="Enter Symbol"
=======
                          <div className='col-12'>
                            <label className='form-label'>Symbol</label>
                            <input
                              type='text'
                              name='nft_symbol'
                              className='form-control'
                              placeholder='Enter Symbol'
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                                setNFTSymbol(e.target.value)
                              }
                            />
                          </div>{" "}
<<<<<<< HEAD
                          <div className="col-12">
                            <label className="form-label">Price</label>
                            <input
                              type="text"
                              name="nft_price"
                              className="form-control"
                              placeholder="Enter price for one piece"
=======
                          <div className='col-12'>
                            <label className='form-label'>Price</label>
                            <input
                              type='text'
                              name='nft_price'
                              className='form-control'
                              placeholder='Enter price for one piece'
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setUnitPrice(+e.target.value)
                              }
                            />
                          </div>
<<<<<<< HEAD
                          <div className="col-12">
                            <label className="form-label">Description </label>
                            <textarea
                              name="nft_description"
                              className="form-control"
=======
                          <div className='col-12'>
                            <label className='form-label'>Description </label>
                            <textarea
                              name='nft_description'
                              className='form-control'
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                              rows={5}
                              onInput={(e: any) =>
                                setNFTDescription(e.target.value)
                              }
<<<<<<< HEAD
                              placeholder="Enter description"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <button
                              className="w-100 btn btn-primary "
                              disabled={loading === loadingPlace}
                            >
=======
                              placeholder='Enter description'></textarea>
                          </div>
                          <div className='col-12'>
                            <button
                              className='w-100 btn btn-primary '
                              disabled={loading === loadingPlace}>
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                              {loadingPlace}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                <div className="col-md-4">
                  <div className="product-card">
                    <div className="product-card-media">
                      <a href="#">
                        {previewUrl && (
                          <img
                            className="product-card-img"
                            src={previewUrl}
                            alt="Image Preview"
=======
                <div className='col-md-4'>
                  <div className='product-card'>
                    <div className='product-card-media'>
                      <a href='#'>
                        {previewUrl && (
                          <img
                            className='product-card-img'
                            src={previewUrl}
                            alt='Image Preview'
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                          />
                        )}
                      </a>
                    </div>
<<<<<<< HEAD
                    <div className="product-card-body">
                      <div className="product-title d-flex align-items-center">
                        <h6 className="m-0">
                          <a className="text-reset stretched-linka" href="#">
                            {nft_name} #1
                          </a>
                        </h6>
                        <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                          <i className="avatar-text fi-heart"></i>
                        </button>
                      </div>
                      <div className="product-actions d-flex fs-sm">
                        <div className="price col lh-sm">
                          <span className="m-0">
                            Mirrored{" "}
                            <span className="text-body fw-400 w-100 d-block">
=======
                    <div className='product-card-body'>
                      <div className='product-title d-flex align-items-center'>
                        <h6 className='m-0'>
                          <a className='text-reset stretched-linka' href='#'>
                            {nft_name} #1
                          </a>
                        </h6>
                        <button className='like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto'>
                          <i className='avatar-text fi-heart'></i>
                        </button>
                      </div>
                      <div className='product-actions d-flex fs-sm'>
                        <div className='price col lh-sm'>
                          <span className='m-0'>
                            Mirrored{" "}
                            <span className='text-body fw-400 w-100 d-block'>
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                              -- ETH
                            </span>{" "}
                          </span>
                        </div>
<<<<<<< HEAD
                        <div className="price col lh-sm">
                          <span className="m-0">
                            {unitPrice} ETH{" "}
                            <span className="text-body fw-400 w-100 d-block">
=======
                        <div className='price col lh-sm'>
                          <span className='m-0'>
                            {unitPrice} ETH{" "}
                            <span className='text-body fw-400 w-100 d-block'>
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                              1/100
                            </span>{" "}
                          </span>
                        </div>
                      </div>
<<<<<<< HEAD
                      <div className="product-card-cart">
                        <a className="btn btn-primary w-100" href="#">
=======
                      <div className='product-card-cart'>
                        <a className='btn btn-primary w-100' href='#'>
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
<<<<<<< HEAD
          <section className="section">
            <div className="container">
              <div className="row gy-5 justify-content-center">
                <div className="col-md-6 col-lg-5 col-xxl-4">
                  <div className="card">
                    <div className="card-body p-4 p-xl-5">
                      <h3 className="mb-1">Login</h3>
                      <p className="small mb-4">
                        Connect your Wallet to continue.
                      </p>
                      {/* <form> */}
                      <div className="pb-3">
                        <button
                          className="w-100 btn btn-primary"
                          onClick={() => navigate("/login")}
                        >
=======
          <section className='section'>
            <div className='container'>
              <div className='row gy-5 justify-content-center'>
                <div className='col-md-6 col-lg-5 col-xxl-4'>
                  <div className='card'>
                    <div className='card-body p-4 p-xl-5'>
                      <h3 className='mb-1'>Login</h3>
                      <p className='small mb-4'>
                        Connect your Wallet to continue.
                      </p>
                      {/* <form> */}
                      <div className='pb-3'>
                        <button
                          className='w-100 btn btn-primary'
                          onClick={() => navigate("/login")}>
>>>>>>> e4c1c4890342ee74dad85b6a65afc48dd7a37a43
                          Login to Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Createnft;
