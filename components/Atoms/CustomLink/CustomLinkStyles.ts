import Link from 'next/link';
import styled from 'styled-components';

export const StyledCustomLink = styled(Link)`
  &.btn {
    text-decoration: none;
    background: none;
    vertical-align: bottom;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: break-spaces;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
    &:active {
      transform: scale(0.98);
    }
    &:focus {
      outline: 0;
    }
    &.btn-transparent {
      background: none;
      border: none;
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
        border: 1px solid rgb(204, 204, 204);
        background: rgb(245, 245, 245);
      }
    }

    &.btn-primary {
      color: white;

      &:hover {
      }

      &:active {
      }

      &:focus {
      }
    }
    &.btn-secondary {
      border: 1px solid rgb(204, 204, 204);
      background: rgb(245, 245, 245);

      &:hover {
        background: #dbdbdb;
      }
      &:active {
        background: #b5b5b5;
      }
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
      }
      &[disabled],
      &:disabled {
        opacity: 0.5;

        &:hover {
          cursor: not-allowed;
          background: initial;
        }
        &:active {
          transform: scale(1);
        }
        &:active {
          background: initial;
        }
      }
    }
    &.btn-icon.btn-circle {
      border-radius: 50%;
    }

    &.btn-sm {
      font-size: 14px;
      height: 32px;
      padding: 0 16px;
      &.btn-square {
        width: 32px;
      }
      &.btn-icon {
        padding: 0 8px;
        svg,
        img {
          width: 16px;
        }
        &.btn-text {
          padding: 0 16px 0 12px;
          svg,
          img {
            margin-right: 4px;
          }
        }
      }
    }

    &.btn-md:not(.btn-sm) {
      font-size: 16px;
      height: 44px;
      padding: 0 24px;
      &.btn-square {
        width: 44px;
      }
      &.btn-icon {
        padding: 0 12px;
        svg,
        img {
          width: 20px;
        }
        &.btn-text {
          padding: 0 24px 0 20px;
          svg,
          img {
            margin-right: 8px;
          }
        }
      }
    }

    &.btn-lg {
      font-size: 16px;
      height: 52px;
      padding: 0 32px;
      &.btn-square {
        width: 52px;
      }
      &.btn-icon {
        padding: 0 14px;
        svg,
        img {
          width: 24px;
        }
        &.btn-text {
          padding: 0 32px 0 24px;
          svg,
          img {
            margin-right: 8px;
          }
        }
      }
    }
  }
`
export const StyledCustomLinkA = styled.a`
  &.btn {
    text-decoration: none;
    background: none;
    vertical-align: bottom;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: break-spaces;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
    &:active {
      transform: scale(0.98);
    }
    &:focus {
      outline: 0;
    }
    &.btn-transparent {
      background: none;
      border: none;
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
        border: 1px solid rgb(204, 204, 204);
        background: rgb(245, 245, 245);
      }
    }

    &.btn-primary {
      color: white;

      &:hover {
        background: #e8334b;
      }
      &:active {
        background: #c22b3f;
      }

      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
      }
    }
    &.btn-secondary {
      border: 1px solid rgb(204, 204, 204);
      background: rgb(245, 245, 245);

      &:hover {
        background: #dbdbdb;
      }
      &:active {
        background: #b5b5b5;
      }
      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
      }
      &[disabled],
      &:disabled {
        opacity: 0.5;
        pointer-events: none;

        &:hover {
          cursor: not-allowed;
          background: initial;
        }
        &:active {
          transform: scale(1);
        }
        &:active {
          background: initial;
        }
      }
    }
    &.btn-icon.btn-circle {
      border-radius: 50%;
    }

    &.btn-sm {
      font-size: 14px;
      height: 32px;
      padding: 0 16px;
      &.btn-square {
        width: 32px;
      }
      &.btn-icon {
        padding: 0 8px;
        svg,
        img {
          width: 16px;
        }
        &.btn-text {
          padding: 0 16px 0 12px;
          svg,
          img {
            margin-right: 4px;
          }
        }
      }
    }

    &.btn-md:not(.btn-sm) {
      font-size: 16px;
      height: 44px;
      padding: 0 24px;
      &.btn-square {
        width: 44px;
      }
      &.btn-icon {
        padding: 0 12px;
        svg,
        img {
          width: 20px;
        }
        &.btn-text {
          padding: 0 24px 0 20px;
          svg,
          img {
            margin-right: 8px;
          }
        }
      }
    }

    &.btn-lg {
      font-size: 16px;
      height: 52px;
      padding: 0 32px;
      &.btn-square {
        width: 52px;
      }
      &.btn-icon {
        padding: 0 14px;
        svg,
        img {
          width: 24px;
        }
        &.btn-text {
          padding: 0 32px 0 24px;
          svg,
          img {
            margin-right: 8px;
          }
        }
      }
    }
  }
`
