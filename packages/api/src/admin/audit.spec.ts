import { isAuditFailClosed } from './audit';

describe('isAuditFailClosed', () => {
  it.each([
    [undefined, true],
    ['', true],
    ['true', true],
    ['False', true],
    ['0', true],
    ['false', false],
  ])('AUDIT_LOG_FAIL_CLOSED=%p -> %p', (value, expected) => {
    const env = value === undefined ? {} : { AUDIT_LOG_FAIL_CLOSED: value };
    expect(isAuditFailClosed(env as NodeJS.ProcessEnv)).toBe(expected);
  });
});
