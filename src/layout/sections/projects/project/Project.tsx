import React from 'react';
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {Button} from "../../../../components/Button";
import {S} from '../Projects_Styles'
import {Icon} from "../../../../components/icon/Icon";
import {Link} from "../../../../components/Link";

type ProjectPropsType = {
    title: string
    text: string
    src: string
    hrefBtn: string
    hrefIcon: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <S.ImgWrapper> <S.Image src={props.src} alt=""/></S.ImgWrapper>
                <FlexWrapper className={'project_info'} direction={'column'} gap={'15px'}>
                    <S.Title>{props.title}</S.Title>
                    <S.Text>{props.text}</S.Text>
                    <FlexWrapper gap={'15px'} align={'center'} justify={'center'}>
                        <Button accent as={'a'} href={props.hrefBtn} target="_blank">
                            View Project
                        </Button>
                        <Link href={props.hrefIcon} target="_blank">
                            <Icon iconId={'github'} width={'50px'}
                                  height={'50px'} viewBox={'-3 -3 30 30'}/>
                        </Link>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </S.Project>
    );
};