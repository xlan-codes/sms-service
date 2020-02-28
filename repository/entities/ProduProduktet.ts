import { Column, Entity } from "typeorm";

@Entity("produ_produktet", { schema: "sugar" })
export class ProduProduktet {
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

  @Column("varchar", { name: "street", nullable: true, length: 255 })
  street: string | null;

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
    default: () => "'0'"
  })
  category: string | null;

  @Column("varchar", {
    name: "technolody",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  technolody: string | null;

  @Column("varchar", {
    name: "status",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  status: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("varchar", {
    name: "devicetype",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  devicetype: string | null;

  @Column("varchar", {
    name: "modemtype",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  modemtype: string | null;

  @Column("varchar", {
    name: "pos",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  pos: string | null;

  @Column("varchar", {
    name: "telephonybundles",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  telephonybundles: string | null;

  @Column("varchar", {
    name: "iptype",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  iptype: string | null;

  @Column("varchar", { name: "iprange", nullable: true, length: 255 })
  iprange: string | null;

  @Column("varchar", { name: "staticipaddress", nullable: true, length: 255 })
  staticipaddress: string | null;

  @Column("varchar", { name: "ipmask", nullable: true, length: 255 })
  ipmask: string | null;

  @Column("varchar", { name: "smartcard", nullable: true, length: 255 })
  smartcard: string | null;

  @Column("varchar", { name: "contactperson", nullable: true, length: 255 })
  contactperson: string | null;

  @Column("date", { name: "serviceenddate", nullable: true })
  serviceenddate: string | null;

  @Column("date", { name: "installationdate", nullable: true })
  installationdate: string | null;

  @Column("date", { name: "contractdate", nullable: true })
  contractdate: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("varchar", { name: "fofiberpairs", nullable: true, length: 255 })
  fofiberpairs: string | null;

  @Column("char", { name: "contact_id_c", nullable: true, length: 36 })
  contactIdC: string | null;

  @Column("char", { name: "produ_services_id_c", nullable: true, length: 36 })
  produServicesIdC: string | null;

  @Column("varchar", { name: "services", nullable: true, length: 255 })
  services: string | null;

  @Column("varchar", { name: "contacts", nullable: true, length: 255 })
  contacts: string | null;

  @Column("varchar", { name: "technology", nullable: true, length: 255 })
  technology: string | null;

  @Column("varchar", {
    name: "installation",
    nullable: true,
    length: 100,
    default: () => "'0'"
  })
  installation: string | null;

  @Column("varchar", { name: "fo_msan_port", nullable: true, length: 255 })
  foMsanPort: string | null;

  @Column("varchar", {
    name: "fo_downstream_speed",
    nullable: true,
    length: 255
  })
  foDownstreamSpeed: string | null;

  @Column("varchar", { name: "ethdownstream", nullable: true, length: 255 })
  ethdownstream: string | null;

  @Column("varchar", { name: "fo_switch_name", nullable: true, length: 255 })
  foSwitchName: string | null;

  @Column("varchar", { name: "fo_switch_port", nullable: true, length: 255 })
  foSwitchPort: string | null;

  @Column("varchar", { name: "canopyip", nullable: true, length: 255 })
  canopyip: string | null;

  @Column("varchar", {
    name: "fo_fiber_optic_lossdb",
    nullable: true,
    length: 255
  })
  foFiberOpticLossdb: string | null;

  @Column("varchar", { name: "fo_connector_type", nullable: true, length: 255 })
  foConnectorType: string | null;

  @Column("varchar", { name: "fo_msan_slot", nullable: true, length: 255 })
  foMsanSlot: string | null;

  @Column("varchar", { name: "fo_fiber_pairs", nullable: true, length: 255 })
  foFiberPairs: string | null;

  @Column("varchar", { name: "fo_upstream_speed", nullable: true, length: 255 })
  foUpstreamSpeed: string | null;

  @Column("varchar", { name: "fo_fiber_cable", nullable: true, length: 255 })
  foFiberCable: string | null;

  @Column("varchar", { name: "fo_fiber_splice", nullable: true, length: 255 })
  foFiberSplice: string | null;

  @Column("varchar", { name: "sate", nullable: true, length: 255 })
  sate: string | null;

  @Column("varchar", { name: "ip_mask", nullable: true, length: 255 })
  ipMask: string | null;

  @Column("varchar", { name: "contact_person", nullable: true, length: 255 })
  contactPerson: string | null;

  @Column("date", { name: "contract_date", nullable: true })
  contractDate: string | null;

  @Column("varchar", { name: "ip_range", nullable: true, length: 255 })
  ipRange: string | null;

  @Column("varchar", { name: "static_ip_address", nullable: true, length: 255 })
  staticIpAddress: string | null;

  @Column("varchar", {
    name: "ip_type",
    nullable: true,
    length: 100,
    default: () => "'dynamic'"
  })
  ipType: string | null;

  @Column("varchar", {
    name: "modem_type",
    nullable: true,
    length: 100,
    default: () => "'modem_type_1'"
  })
  modemType: string | null;
}
