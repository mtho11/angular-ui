'use strict';

describe('Service: metrics', function () {

  // load the service's module
  beforeEach(module('rhqApp'));

  // instantiate service
  var metrics;
  beforeEach(inject(function (_metrics_) {
    metrics = _metrics_;
  }));

  it('should do something', function () {
    expect(!!metrics).toBe(true);
  });

});
