import { StaticImageData } from "next/image";
import ChesterImg from "@/assets/team_avatar/chester.webp";
import ChunHsuImg from "@/assets/team_avatar/chun-hsu.webp";
import ChunLinImg from "@/assets/team_avatar/chun-lin.webp";
import ChunShihImg from "@/assets/team_avatar/chun-shih.webp";
import DboyImg from "@/assets/team_avatar/dboy.webp";
import HanXuanImg from "@/assets/team_avatar/han-xuan.webp";
import JennyImg from "@/assets/team_avatar/jenny.webp";
import JieYinImg from "@/assets/team_avatar/jie-yin.webp";
import JunLiImg from "@/assets/team_avatar/jun-li.webp";
import KuanHsienImg from "@/assets/team_avatar/kuan-hsien.webp";
import LiHungImg from "@/assets/team_avatar/li-hung.webp";
import PeterWolfImg from "@/assets/team_avatar/peterwolf.webp";
import SeanImg from "@/assets/team_avatar/sean.webp";
import ShengWenImg from "@/assets/team_avatar/sheng-wen.webp";
import ShuhsiImg from "@/assets/team_avatar/shuhsi.webp";
import SteveImg from "@/assets/team_avatar/steve.webp";
import VeraImg from "@/assets/team_avatar/vera.webp";
import WeiSyuanImg from "@/assets/team_avatar/wei-syuan.webp";
import WuxianImg from "@/assets/team_avatar/wuxian.webp";
import YuFangImg from "@/assets/team_avatar/yu-fang.webp";
import YungYuImg from "@/assets/team_avatar/yung-yu.webp";
import ZongHanImg from "@/assets/team_avatar/zong-han.webp";

type TeamType = {
  title: string;
  members: MemberProps[];
};

type MemberProps = {
  name: string;
  email?: string;
  image?: StaticImageData;
};

// A member without an image uses the default avatar.
const chunHsu: MemberProps = { name: "Chun-Hsu", image: ChunHsuImg };
const yungYu: MemberProps = { name: "Yung-Yu", image: YungYuImg };
const liHung: MemberProps = { name: "Li-Hung", image: LiHungImg };
const vera: MemberProps = { name: "Vera", image: VeraImg };
const kuanHsien: MemberProps = { name: "Kuan-Hsien", image: KuanHsienImg };
const chiaYun: MemberProps = { name: "Chia-Yun" };
const hanXuan: MemberProps = { name: "Han-Xuan", image: HanXuanImg };
const chunLin: MemberProps = { name: "Chun-Lin", image: ChunLinImg };
const chester: MemberProps = { name: "Chester", image: ChesterImg };
const jieYin: MemberProps = { name: "Jie-Yin", image: JieYinImg };
const weiSyuan: MemberProps = { name: "Wei-Syuan", image: WeiSyuanImg };
const yuFang: MemberProps = { name: "Yu-Fang", image: YuFangImg };
const terry: MemberProps = { name: "Terry" };
const junLi: MemberProps = { name: "Jun-Li", image: JunLiImg };
const wuxian: MemberProps = { name: "Wuxian", image: WuxianImg };
const jenny: MemberProps = { name: "Jenny", image: JennyImg };
const shuhsi: MemberProps = { name: "Shuhsi", image: ShuhsiImg };
const peterWolf: MemberProps = { name: "PeterWolf", image: PeterWolfImg };
const sean: MemberProps = { name: "Sean", image: SeanImg };
const shengWen: MemberProps = { name: "Sheng-Wen", image: ShengWenImg };
const zongHan: MemberProps = { name: "Zong-Han", image: ZongHanImg };
const steve: MemberProps = { name: "Steve", image: SteveImg };
const dboy: MemberProps = { name: "Dboy", image: DboyImg };
const chunShih: MemberProps = { name: "Chun-Shih", image: ChunShihImg };
const alex: MemberProps = { name: "Alex" };
const kuanWei: MemberProps = { name: "Kuan-Wei" };

const teams: TeamType[] = [
  {
    title: "Core",
    members: [chunHsu],
  },
  {
    title: "Finance",
    members: [liHung, vera],
  },
  {
    title: "Venue",
    members: [kuanHsien, chiaYun, hanXuan, chunLin, chunHsu],
  },
  {
    title: "Website",
    members: [chester, chunLin],
  },
  {
    title: "Program",
    members: [jieYin, weiSyuan],
  },
  {
    title: "Logistics",
    members: [
      liHung,
      jieYin,
      yuFang,
      terry,
      chiaYun,
      hanXuan,
      kuanHsien,
      junLi,
      chunLin,
      wuxian,
    ],
  },
  {
    title: "Promotion",
    members: [chunLin, jenny, chiaYun],
  },
  {
    title: "Reviewer",
    members: [
      shuhsi,
      yungYu,
      peterWolf,
      sean,
      shengWen,
      zongHan,
      chester,
      steve,
      dboy,
      chunShih,
      jieYin,
      kuanHsien,
      alex,
      jenny,
      kuanWei,
      junLi,
      chunHsu,
    ],
  },
];

export default teams;
