import React from "react";
import PropTypes from "prop-types";
import "./Sidemenu.css";
import { Icon } from "semantic-ui-react";
import MenuItem from "../MenuItem/MenuItem";
import { menu } from "@/utils/menu";
class Sidemenu extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.width === 60 ? "fixed-side side-mobile" : "fixed-side"
        }
        style={{ width: this.props.width }}
      >
        <div className="overflow-visible">
          <div className="logo">
            <svg
              width="38"
              height="27"
              viewBox="0 0 38 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="38" height="27" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0" transform="scale(0.0128205 0.0181818)" />
                </pattern>
                <image
                  id="image0"
                  width="78"
                  height="55"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAA3CAYAAACih3wUAAAAAXNSR0IArs4c6QAAEvhJREFUeAG9m2uMXddVx899zYwfaeq2QZDGM+O4sT2xayIhISE+VKpaFFShfkBKpfYTLXWIWzXQIqGmQKkKIvChQkBVpEhNEZQ2fUSlQAIqUtWKOs74NbEdJ57x+JWXH0lmPA/fmfvk/1t7r3POvXPH9tgzXp5999prr732Xv+99uOce134wK8dS0SFmPI8spulthp6wkaev1mbK2nnY/d8JW2X08UHyPKyGAPttx7c9Y1CIfl4K7hYaCvvTO1YJleSIvUteEvot5OWyclb3z1y6MxnZb+p1CLtfmCo3RaH3rWI+v6B/qRcriTNljVQf4yYQdG+i4/2yI4fmyxu2z74y6VS6RH1UZByQWLaiLfmWdexnQvQS0l1ri5fxyYnX/mR6vADtRbAQUWld0t3ow/MpEs+MOXmlg7Cx4HlpFD41O4HttxxdOzM76tUJx0dO9e6f+dm4WIaaPUkwO9jiCugY0cnLQC27xjaVi6Xfq6md9FcuCVEgbJA2fBVlpC6WAXCzmv8oR11xeRn+nxWCT8aSgUAw2RJY60qTwnfMv+ixSyLHcRuYka3OTYpFpOHdr1/6AkZHVCqKBVPvPhKQaRxXTulA7kBxkHbMTK8vVIuHVSTu2TeHCM3ENxOlHuxVx1NjBijGE30RWXrlPChpGTAKU+KWgqAuIQcQABJQXEtEwZpWmcNXEG9lIof27lr8OuSdICXaawKVxgRaIq0AwJig1nEY3nUDYLXpXIEESCvM5EVQp2QAzAHznDyiMNOhy1v1zPPgWPYefxl6FnsWVHxL/A+riX6NdladfCOvnCquGNkaGu5UjogBwy0YrFgUWAO6UPF4FwXQFbvDnbVIfZ6bY9EWZ8SW5thZuihIyxMD0x6U6zIZXlVb4fM5F16Au/3to/c82VVrxp4L4ydKirShvoq5f2yuyH1VIWC0DKH+FASLoG6AHJxrMxMdFS0wSkFDV0Hztqlzstp+FDOEGBTpxQkmTwKPHOFeJaaaasrl4p/uGPknr+RZAl4OBYSe19os9zn2JGJwgtHThV37tyyo9JXHlODd3kT8tRWjDyzowrtuYGk4PoGahQHYY+6EFRm2lXdVOa018TcAYwwSZpxEdko6Tzvc1phBqJA14Q99237pb+UoX6l9MCo11tJrdZMFhfrCTyHR0dfKkFHDk+YAzt3bdmh5TkqtXdYRQSDbgDId2+LvBQl1Tl/LfC66sx++EjdSoFzEHJKvVmaxhSyYMsBpjI9W+0GlTOjAXGRaxdqnxm+986vqCYFb/zka4Vms5WQuI6447nWzhZ27bp3pFIpj0pge5rMBhJj+xnASeZy2/NSnRsAD2tq7E0yJvajLAMuk/XgAjgxtBy3VM/vZRHPAKxdWLOYAUyG0mpzDdKBUU4e3XLvu/5YBcCz/eP05IV4VUlNdzBHDk0Ud+4aHlSkPa+KDSEqgwogMXlEWImtXAT4Dh7yLNoyeTdAKVhmIAeeWcw+lgBH5ykyVojKkntV4DI5HHVGKaNSvMQiYgiYa7UAjoHj1cKfbh66c4+K7HkpeNR30+FD48Wd7x8e7OursDzDlUNKHeBZmaUqkPBMKCwHHoBmQOYAok2+cyl2lGNdB3COE456gkGeLj83GhXIoCXPM75MXQGNdjNGXPCq2VpU+a2/HRze9HmZSCNv8tQb6VgPjZ4sHDowXty9e+v9/X19R6RnTwQeSda3F9RKkWyOAqgDsxx4KLrO9SKPfvLELBul/rlgOXkErBvKAHqAN1Vxy2Zcy7RVk0SPrrpPNsUDZKFQFv/Wnw8Ovbt+/tzU38duG4cOTPhDV2H3r947Uu7T8mwl6wHEtwbw8sl2uR0MwK4+iTwYHncBjxVg+mrIRAdeelQxRuQSxuGKNzOqWEpZxJn2UoWOpmY0A4c6OrcBqGkwoU93OWeOQ6Flj3nqUiNqtRastmB3yyLgfXXz4KZHJEwjT3xx9wNbR3TlGBUE631H7lieYBMpLFEJ9OeR5MsWNYs8clT04TroIzMCvMia3PmuPAVOhthncgQiyxetxurzQErqbZjdtFjUjNb1hqOhsZSV163MXNPa9jvxAu/xu+9550NqZqctB0FfX3m/xrae/nDIIofcvEcanGbyiLZwMEiT+YkIoJu208FhduKHg2fmoj4NnYXJF0OPZj6wenVyAc4jyPK0HMAJmghjioJ0f3PQluxvLIVwKLQLunIo2tKhxTYBPJbh20+8564Nv/7OTRs3bbxjYFSKG60bPHOK0202cmKClwgzEOghOB3zeGDIhgU5tmgLKtGG61NlcmPswz1LJQzBYJidq/679oK305re+kHb4iSyGDCzWeRlvcABhg4FTlPtZ+2mos1O1pzHsX2xWNIleCEZWF/78bYdg4fUzXtMSx/kFmVmUR89wKtwMEixGMGwSKNtmjLw1FUwYXXZsg3tZR/CjjLtqdNkiJxi90nr0IHTB3X53O8VS3O1C3/RgoCiHM1xSzOFuL9FsaQcCkQbFW2LtqW2NUb9W1ysJgPr3pG89+73rSsVi7+iq7KpYtlpOfBwuFSSFTwSn4EmmZUNhyB30B08jAOSd4R+1mFSrzVOqMhgPBnoFPCqMT+/+LRykUSuEvOwdClEMjaLsrQN1QEjU+QE1MOUeO1zTa4fvAtkbwtdoISTi4q0/v4NyeDm7YkuuElDkQmY7o05Fb3pBo+xFcuKmrh/+cnaCzz6s4jMg5ez6+D5QaLxz16+PPWcmrlXNvQ04lTRODg6+YwGMRtAcuxWuL8xMiPsCyAtU957U+LeJveyagkNNEVapW9dsnlwh0VNvSbQogfmkzsWWobPfL0kJZktCzyIKnOcPE0houxibDpZhKGTHRI2XcGObDYbzeeq1cUrErBs/GsA8wKfQBNhfaFa46WjCHEXmSgfZdKKMjSN9YMhNrXTlLp4b5MrrhlBW0j6BNrQoCJNEVOv6+SVJ2iFDzK8R6DM83xBHXOa4jyPVqauLEReACgAGHiTYyseJIYC+kpmFnlgk6npmX8TC2ieLPI84vCZitpz+8a/rvC8LD5Hqg5/EU7UHbQAmMclNaGWQ0F3N0Ucy5WT1DyiocgjbaB/fTKoSCuXiylooGOOmqKpyxG54o55HgyZgr7XsdOSKj8cqAgRFu1hItruBs/2xgg+7QBV0bbv8qXpl1VcVIq3d3PPXtChh68gCXiLFy/OPKw8IBORcGCCPFSZignQVcICySg80Bt4WqLtFgENmGTxIBjYmAwPbU8qlYJO00bqcMDlxsHDSTsY6NfAieARFiqzjB0wJsQmQHk3eDSnDrkme3py8vW/kATQHDjwMQ8x7YRLBtzLJ14dvXKl+sWIWYygqIbQKNa6kovJw/pVxv7W0KmqybIpDQ7Y6amDYHhwmw2yrvdw4fEo+oRzRtcHT0FtyxTwIQNDLAClkWfAhb5TuXSNjwgAvv7CMNvtuXNnLz5cq9W5hvAlFsuFU43ZNwS6gbN9DsWxw2eemp2t/pX4jARI+BdEER8rmDXf3wSS3d3s/qYnBnnHUrPlWasm/XFPY1+q1XletVqNOtglwykvwVsxytB2XXTKur+RvJHNEbpKDp7ZoFk0bBOFjgjALBejNTF/7pU3987MzJ+X7GpMDhzR1hM4Kog6FOfHDp998sr0/JdNV+rWIo44Ay2DknoS4+DuxqNVUylIZHQhgDY8OGJvMQANx6JJZXkeJ9XUKDD2GWWuyzh4I1IshZskkQNZ9MAq2cSkUadyqiMrVh+Wc1OvaiZPX/rU1Fszp9RyXmlOCfBYqmm0ife7AawRfnvUEaLzx46e/870VPXP0j2OqENLRGYsH0CuxFg5DHQc6GDwNyBF3dOqybqBDTo9dRBoI6/XeD2ON6GNNVRbB0SsiVLwIoP9Dl0VK/r+yZcomHg0OXgsK4u8CF6QW0+mG0y335wcf+PhK1Nz56UOYLNKgEcQ+d4WPV8KnHQMCxQ5RUB79sXj55+anr76pYCSJGJSCymDHIqnqS67zWbNwGFPWzdwhw6CbQmPRTVA0+gNBD7DXycgOaBgTTcni43N8XJufzNbUs6D5+HRAZ6BaFYZ9KWXX3p9z8zM1dfF50EjePw0JTRSYjK6CShIgEeIGngvvfjq96em5x9LcSLsYuiZzPc3jZxl2mgyUW09RunZU5E2PPg+OcOe1g7LU7XmJHlkAjgmQCJxcIxPB8/3KGT0W9REVHTx9XHRh5mTgi1JcuOD3MGzDkLd1Injr+2ZuVLlJYeD5ku0J2jS87mA7SDG4ftdCt7Jl177wcxM9Su+VGnhA/YcCXc23r3V6ov68cz6ZGjzffY4VG/wConR2l/oMOVzcrGQZZG3svMRUA7tipZ9uSK7/DikGPY5rh80tszWpYoqx2aq0j8rt6cmxi/s1SF4SS3yoC0baYwDwvZy1BM8XVW+fWVq/vNUGligGPc3zLV0X2s2rya1xas6PRVpLE/b0wJoGq8oeBH4WEzlVhs+UMvpom8OWx7uhCx9TlTkIZpsVHY44B0OmhxbJAnItQ+/fvzYq5+8fGn2nFRWBJr0rwkc9YwCWDga08ibmHjjPwXeo2m4qdJIIyLaqtWZZP36O5MtQ/fZY9SiXeM0WojBB848yHiXB4Ul8iggw3GI6O3X61crS0ZuEc3+KZ5gM/AAyyNPIr12ePXwwXN7dOh1L8/rRhr9QkzI9QjwSB173uSpC88IvM/Z/LK/MZW6r83PvynQ7tDpudWuCXVBbg7IgDlIbzhIDkmY8S4PCp1yZEHCJ/1yDenvV4nuYzV5kfHkwTMZOjzNtF4Z3X92z9X52lsyQaTNxPyGQZP+DQGHHuPsjry506cvPivwPktlUa9V56tv64G9kgwP32ePOXUiTYPOA2VlifIylFAzEhP4wKRyVRrvBtRpevFVjV9HqEavGzzbl9ut1/bvO/Pp6tX6lFRWvDxtfPHjRiLO9cGHxLK1C7LyubNnLv3PzHT1T7jcVvSgPqTlGU5POZC3nkMgZaOTsmPeLpUHBZPHSuf55qpP97cK304YheVpwKlfcuteBwaPZYVC68Kh0fN/sFBt8IqIOxoJ8FYUadI3yrvmsmvlDp4vW7tdnz1z8elarfbo3Xe/NxwEgtYDw3OMprycijgYE/ggvKacSlOLB4OAsy9nJLMtTB3QR5oEWquhAytpTuz7xdlPTk8vvCkLtwwavqwUONr0BO/05KVn5uZqj9fi8sRHpxQwCVLeAIgaKR+YtO1ycjUrCsE+9jd49ORJHjyL+gXemjRO/vQnk4/MzdT4PsVBY8I90tiCSCuimwGODrrB45I8N7p//JuzswuP2whwJvgVir14dKxWHykfmGvJ6bykK85AP1ywYVGWA69e18+YNjVe/u//OrW30WixJH1Pu2XQ6PNmgaNtL/BmDzx/6ptzs4tfQwG6efCWPzDYs+ziq6XKph++Fgx9GYDqd6HaPv2D70zs1S+fbDuRqHtPa33gg9tWHGn4BN0KcLR38PL3vLnn90/8k477b6AA3Rx4oWGvyGuqVzsY4jOq2feIVa6f+J/Z93+Te2XBVoJyB41Djceo1gc/tP2mQVP7WwYu+dCHdzl4HQeGXsH/3cxMXLbqaFXBa2l/G9BvAvQ+T5btz/c5fWdx7Nn/mNizULWXkL48O07PDz94a6DR661GHDYcPGbQwbMXA1q2T64FeGz8/exvym1pxllp1BtjP3564nP6RadHmOccBKyK5oMf2c5E3zKtCnCMIkaeg8eS6A1ebsg9o9CXHHo9ePY03ucN6FGLXxj5XVGv3w8//f2JP/J+leefCAy0j3x0dUBjaKsGHMZ6gMfGbAfG/FztH9AxMASI07LgOWjkph8YDgaAs4sv0yTwms3miR9+b/wLKuX3ND89DbSP/u7qgcbYVxU4DHaBx4sBO9X2Pzf+jyl4EvYErEuejzjDTvVNvT7Sf/PSqcrrK+0NjcbY97598jOqWha0hz6xY1WWp/pIadWBw/Iy4M0C3pUrC3/tvV8LPAcqBY+AU0PewXHx5TBo1Ov7n/rXcV+efhB0RNqXvrq6keZjXxPgMN4DPNvzDo6e+taNgJcChjFHUTm/D+HFZa3e2Pfdf5n4omqXjbQvPLY2oDGkNQMO413g+YuBWYH35ErBs2hjf9OrpIF19Z//8xMTj6kL20OVLzk9f/t37l/15YlPThrG2hLg/e9PjrONc1VJ6fDByW/9xm9u3yrBBp2UJW3y8VsL+Rv+TNdeBwVOh4CCT1/Znj0z9UOJAM2BI2di7CD42CdG2jOcqWtIhfg/pNewi9Q0QUOEM1m8DOLnqfzaklwPTyb3RaliTyKKOr6+VLkDNJXXNNJ8VGsecd5RdKg78ijzCHQzwHFic7Elt0hTfltAUz82y+S3i3DMwfPoATgmkGi8XsRJxdp71AEYWwDl2waa+rrtwNGng0dOwnEH7UaBox1gMQkkyreVbudSzTvmjgKag+V5Xq8X722pg8+Xe+mviez/AdQcE69dYRhCAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <h4>INEO</h4>
          </div>
          <div className="menu">
            {menu.map((item, i) => (
              <MenuItem
                width={this.props.width}
                item={item}
                key={`menu-item-${i}`}
                end={i === menu.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Sidemenu.propTypes = {};

export default Sidemenu;