goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41666__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41667__i = 0, G__41667__a = new Array(arguments.length -  0);
while (G__41667__i < G__41667__a.length) {G__41667__a[G__41667__i] = arguments[G__41667__i + 0]; ++G__41667__i;}
  args = new cljs.core.IndexedSeq(G__41667__a,0);
} 
return G__41666__delegate.call(this,args);};
G__41666.cljs$lang$maxFixedArity = 0;
G__41666.cljs$lang$applyTo = (function (arglist__41668){
var args = cljs.core.seq(arglist__41668);
return G__41666__delegate(args);
});
G__41666.cljs$core$IFn$_invoke$arity$variadic = G__41666__delegate;
return G__41666;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41669__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41670__i = 0, G__41670__a = new Array(arguments.length -  0);
while (G__41670__i < G__41670__a.length) {G__41670__a[G__41670__i] = arguments[G__41670__i + 0]; ++G__41670__i;}
  args = new cljs.core.IndexedSeq(G__41670__a,0);
} 
return G__41669__delegate.call(this,args);};
G__41669.cljs$lang$maxFixedArity = 0;
G__41669.cljs$lang$applyTo = (function (arglist__41671){
var args = cljs.core.seq(arglist__41671);
return G__41669__delegate(args);
});
G__41669.cljs$core$IFn$_invoke$arity$variadic = G__41669__delegate;
return G__41669;
})()
;

return null;
});
