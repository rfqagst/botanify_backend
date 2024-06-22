import db from "../database/db.js";

// Mendapatkan informasi penanganan berdasarkan ID
const getPenangananById = async (id_penanganan) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM penanganan WHERE id_penanganan = ?",
      [id_penanganan],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

// Mendapatkan informasi penanganan berdasarkan nama_penyakit
const getPenangananPenyakitByNama = async (nama_penyakit) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT id_penanganan, nama_penyakit, penanganan FROM penangananPenyakit WHERE nama_penyakit = ?",
      [nama_penyakit],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

// Mendapatkan informasi penanganan berdasarkan nama_hama
const getPenangananHamaByNama = async (nama_hama) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT id_penanganan, nama_hama, penanganan FROM penangananHama WHERE nama_hama = ?",
      [nama_hama],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

// Menambahkan informasi penanganan baru
const addPenanganan = async (nama_penyakit, nama_hama, penanganan) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO penanganan (nama_penyakit, nama_hama, penanganan) VALUES (?, ?, ?)",
      [nama_penyakit, nama_hama, penanganan],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

// Memperbarui informasi penanganan
const updatePenanganan = async (
  id_penanganan,
  nama_penyakit,
  nama_hama,
  penanganan
) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE penanganan SET nama_penyakit = ?, nama_hama = ?, penanganan = ? WHERE id_penanganan = ?",
      [nama_penyakit, nama_hama, penanganan, id_penanganan],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

// Menghapus informasi penanganan
const deletePenanganan = async (id_penanganan) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM penanganan WHERE id_penanganan = ?",
      [id_penanganan],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

export {
  getPenangananById,
  getPenangananPenyakitByNama,
  getPenangananHamaByNama,
  addPenanganan,
  updatePenanganan,
  deletePenanganan,
};
