import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render () {
        return (
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                            <i className="iconfont">&#xe6af;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.state.focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            ></NavSearch>
                            </CSSTransition>
                            
                            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe600;</i>
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className="reg">注册</Button>
                        <Button className="writting">
                            <i className="iconfont" style={{marginRight: 6}}>&#xe608;</i>
                            写文章
                        </Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
    handleInputFocus () {
        this.setState({
            focused: true
        })
    }
    handleInputBlur () {
        this.setState({
            focused: false
        })
    }
}

export default Header;