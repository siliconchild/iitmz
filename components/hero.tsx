import styles from "./hero.module.scss";
import Slider from "./slider";
import Img from "./image";
import Button from "./button";
import Link from "next/link";
import { Banner } from "@/data/banner";
import { banners} from "@/data/banner";

type HeroProps = {
  banners: Banner[];
};

export default function Hero() {
  return (
    <section>
      <Slider autoplayInterval={8000}>
        {banners.map((banner: Banner) => (
          <div key={banner.img} className={styles.item}>
            <Img
              width={1200}
              height={800}
              alt="IITM Zanzibar Campus Image"
              src={banner.img}
              loading="eager"
              sizes="(max-width: 768px) 900px, (min-width: 768px) 1200px"
            />

            <div className={styles.content}>
              {banner.mdTitle && <h3>{banner.mdTitle}</h3>}
              {banner.lgTitle && <h2>{banner.lgTitle}</h2>}
              {banner.smTitle && <h4>{banner.smTitle}</h4>}

              {banner.linkText && banner.linkURL && (
                <Button>
                  <Link target="_blank" href={banner.linkURL}>
                    {banner.linkText}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
