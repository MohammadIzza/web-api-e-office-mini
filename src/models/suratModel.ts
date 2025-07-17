import { db } from '../config/db';

export interface Surat {
  id?: number;
  nomor_surat: string;
  pengirim: string;
  tanggal_masuk: string;
  perihal: string;
  file_pdf_path?: string;
}

export const createSurat = async (surat: Surat, filePath: string) => {
  const [result] = await db.query(
    'INSERT INTO surat_masuk (nomor_surat, pengirim, tanggal_masuk, perihal, file_pdf_path) VALUES (?, ?, ?, ?, ?)',
    [surat.nomor_surat, surat.pengirim, surat.tanggal_masuk, surat.perihal, filePath]
  );
  return result;
};

export const getAllSurat = async () => {
  const [rows] = await db.query('SELECT * FROM surat_masuk');
  return rows;
};