import { Column, Entity } from "typeorm";

@Entity("produ_produktetxxxxxxxxxx", { schema: "sugar" })
export class ProduProduktetxxxxxxxxxx {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 255 })
  ip: string | null;

  @Column("varchar", { name: "ap", nullable: true, length: 255 })
  ap: string | null;

  @Column("varchar", { name: "aphostname", nullable: true, length: 255 })
  aphostname: string | null;

  @Column("varchar", { name: "postalcode", nullable: true, length: 255 })
  postalcode: string | null;

  @Column("varchar", {
    name: "location",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  location: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("varchar", { name: "state", nullable: true, length: 255 })
  state: string | null;

  @Column("varchar", { name: "ethswitchname", nullable: true, length: 255 })
  ethswitchname: string | null;

  @Column("varchar", {
    name: "ethernetdownstreamspeed",
    nullable: true,
    length: 255
  })
  ethernetdownstreamspeed: string | null;

  @Column("varchar", { name: "ethcablelength", nullable: true, length: 255 })
  ethcablelength: string | null;

  @Column("varchar", { name: "ethswitchport", nullable: true, length: 255 })
  ethswitchport: string | null;

  @Column("varchar", {
    name: "ethernetupstreamspeed",
    nullable: true,
    length: 255
  })
  ethernetupstreamspeed: string | null;

  @Column("varchar", { name: "fomsanname", nullable: true, length: 255 })
  fomsanname: string | null;

  @Column("varchar", { name: "fomsanslot", nullable: true, length: 255 })
  fomsanslot: string | null;

  @Column("varchar", { name: "fomsanport", nullable: true, length: 255 })
  fomsanport: string | null;

  @Column("varchar", { name: "fodownstreamspeed", nullable: true, length: 255 })
  fodownstreamspeed: string | null;

  @Column("varchar", { name: "foupstreamspeed", nullable: true, length: 255 })
  foupstreamspeed: string | null;

  @Column("varchar", { name: "foswitchname", nullable: true, length: 255 })
  foswitchname: string | null;

  @Column("varchar", { name: "foswitchport", nullable: true, length: 255 })
  foswitchport: string | null;

  @Column("varchar", {
    name: "fofiberopticlossdb",
    nullable: true,
    length: 255
  })
  fofiberopticlossdb: string | null;

  @Column("varchar", { name: "foconnectortype", nullable: true, length: 255 })
  foconnectortype: string | null;

  @Column("varchar", { name: "fofibercable", nullable: true, length: 255 })
  fofibercable: string | null;

  @Column("varchar", { name: "fofibersplice", nullable: true, length: 255 })
  fofibersplice: string | null;

  @Column("varchar", { name: "foodfport", nullable: true, length: 255 })
  foodfport: string | null;

  @Column("varchar", {
    name: "category",
    nullable: true,
    length: 100,
    default: () => "'familjare_prepaid'"
  })
  category: string | null;

  @Column("varchar", {
    name: "status",
    nullable: true,
    length: 100,
    default: () => "'new'"
  })
  status: string | null;

  @Column("varchar", {
    name: "modemtype",
    nullable: true,
    length: 100,
    default: () => "'modem_type_1'"
  })
  modemtype: string | null;

  @Column("varchar", {
    name: "pos",
    nullable: true,
    length: 100,
    default: () => "'empty'"
  })
  pos: string | null;

  @Column("varchar", {
    name: "iptype",
    nullable: true,
    length: 100,
    default: () => "'dynamic'"
  })
  iptype: string | null;

  @Column("varchar", { name: "iprange", nullable: true, length: 255 })
  iprange: string | null;

  @Column("varchar", { name: "staticipaddress", nullable: true, length: 255 })
  staticipaddress: string | null;

  @Column("varchar", { name: "ipmask", nullable: true, length: 255 })
  ipmask: string | null;

  @Column("varchar", { name: "contactperson", nullable: true, length: 255 })
  contactperson: string | null;

  @Column("date", { name: "serviceenddate", nullable: true })
  serviceenddate: string | null;

  @Column("date", { name: "installationdate", nullable: true })
  installationdate: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("varchar", { name: "fofiberpairs", nullable: true, length: 255 })
  fofiberpairs: string | null;

  @Column("varchar", { name: "street", nullable: true, length: 255 })
  street: string | null;

  @Column("date", { name: "contractdate", nullable: true })
  contractdate: string | null;

  @Column("varchar", { name: "contacts", nullable: true, length: 255 })
  contacts: string | null;

  @Column("varchar", { name: "technology", nullable: true, length: 255 })
  technology: string | null;
}
