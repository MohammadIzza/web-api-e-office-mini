import { Elysia, t } from 'elysia';
import { createSurat, getAllSurat, Surat } from '../models/suratModel';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export const suratController = (app: Elysia) =>
  app
    .post(
      '/surat',
      async ({ body, set }) => {
        const { nomor_surat, pengirim, tanggal_masuk, perihal, file } = body as any;
        if (!file) {
          set.status = 400;
          return { error: 'File PDF diperlukan' };
        }

        // Simpan file ke folder uploads
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        if (!existsSync(uploadDir)) {
          mkdirSync(uploadDir, { recursive: true });
        }
        const filePath = join(uploadDir, file.name);
        await Bun.write(filePath, file);

        const surat: Surat = { nomor_surat, pengirim, tanggal_masuk, perihal };
        await createSurat(surat, `/uploads/${file.name}`);
        return { message: 'Surat berhasil disimpan' };
      },
      {
        body: t.Object({
          nomor_surat: t.String(),
          pengirim: t.String(),
          tanggal_masuk: t.String(),
          perihal: t.String(),
          file: t.File({ type: 'application/pdf' })
        })
      }
    )
    .get('/surat', async () => {
      const suratList = await getAllSurat();
      return suratList;
    });