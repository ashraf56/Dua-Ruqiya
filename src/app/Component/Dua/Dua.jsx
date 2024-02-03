import a from '@/asset/allah.svg'
import play from '@/asset/play.svg'
import copy from '@/asset/copy.svg'
import re from '@/asset/report.svg'
import share from '@/asset/Vector.svg'
import bk from '@/asset/bokmrk.svg'
import m from '@/asset/Frame.svg'
import Image from 'next/image';

const Dua = async ({ dua }) => {
      const { dua_id, dua_name_en, refference_en, audio, bottom_en, translation_en, dua_arabic, top_en, transliteration_en } = dua

      return (
            <div className='bg-white rounded-lg'>
                  {
                        <div className='card max-w-full shadow-md '>
                              <div className='card-body'>
                                    <div className='flex gap-2 items-center '>
                                          <Image src={a} width={35} height={35} alt='a' ></Image> <span className='text-[#1FA45B] font-[600]'>{dua_id}.{dua_name_en}</span> </div>
                                    <p className='py-1 text-base'>{top_en}</p>
                                    <p className='text-right text-2xl py-1'>{dua_arabic}</p>
                                    <p><span className='text-base  font-[600]'>{transliteration_en ? 'transliteration:' : ''}</span> {transliteration_en}</p>
                                    <p><span className='text-base  font-[600]'>{translation_en ? 'translation:' : ''}</span>  {translation_en}</p>
                                    <div className='pb-4'>
                                          <span className='text-base text-[#1FA45B] font-[600]'>Reference:</span> <br />
                                          <span>{refference_en}</span>
                                    </div>
                                    <div className="flex">
                                          <div className="flex-1">
                                                <a className="btn btn-ghost text-xl">
                                                      <Image src={play} width={35} height={35} alt='a' ></Image></a>
                                          </div>
                                          <div className="flex-none">
                                                <ul className="menu menu-horizontal px-1">
                                                      <li><a>
                                                            <Image src={copy} width={24} height={24} alt='a' ></Image>
                                                      </a></li>
                                                      <li><a>
                                                            <Image src={bk} width={24} height={24} alt='a' ></Image>
                                                      </a></li>
                                                      <li><a>
                                                            <Image src={m} width={24} height={24} alt='a' ></Image>
                                                      </a></li>
                                                      <li><a>
                                                            <Image src={share} width={24} height={24} alt='a' ></Image>
                                                      </a></li>
                                                      <li><a>
                                                            <Image src={re} width={24} height={24} alt='a' ></Image>
                                                      </a></li>


                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>}

            </div>
      );
};

export default Dua;