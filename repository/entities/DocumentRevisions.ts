import { Column, Entity, Index } from "typeorm";

@Index("documentrevision_mimetype", ["fileMimeType"], {})
@Entity("document_revisions", { schema: "sugar" })
export class DocumentRevisions {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "change_log", nullable: true, length: 255 })
  changeLog: string | null;

  @Column("varchar", { name: "document_id", nullable: true, length: 36 })
  documentId: string | null;

  @Column("varchar", { name: "doc_id", nullable: true, length: 100 })
  docId: string | null;

  @Column("varchar", { name: "doc_type", nullable: true, length: 100 })
  docType: string | null;

  @Column("varchar", { name: "doc_url", nullable: true, length: 255 })
  docUrl: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("varchar", { name: "file_ext", nullable: true, length: 100 })
  fileExt: string | null;

  @Column("varchar", { name: "file_mime_type", nullable: true, length: 100 })
  fileMimeType: string | null;

  @Column("varchar", { name: "revision", nullable: true, length: 100 })
  revision: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;
}
