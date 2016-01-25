goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21412__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21413__i = 0, G__21413__a = new Array(arguments.length -  0);
while (G__21413__i < G__21413__a.length) {G__21413__a[G__21413__i] = arguments[G__21413__i + 0]; ++G__21413__i;}
  args = new cljs.core.IndexedSeq(G__21413__a,0);
} 
return G__21412__delegate.call(this,args);};
G__21412.cljs$lang$maxFixedArity = 0;
G__21412.cljs$lang$applyTo = (function (arglist__21414){
var args = cljs.core.seq(arglist__21414);
return G__21412__delegate(args);
});
G__21412.cljs$core$IFn$_invoke$arity$variadic = G__21412__delegate;
return G__21412;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21415__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21416__i = 0, G__21416__a = new Array(arguments.length -  0);
while (G__21416__i < G__21416__a.length) {G__21416__a[G__21416__i] = arguments[G__21416__i + 0]; ++G__21416__i;}
  args = new cljs.core.IndexedSeq(G__21416__a,0);
} 
return G__21415__delegate.call(this,args);};
G__21415.cljs$lang$maxFixedArity = 0;
G__21415.cljs$lang$applyTo = (function (arglist__21417){
var args = cljs.core.seq(arglist__21417);
return G__21415__delegate(args);
});
G__21415.cljs$core$IFn$_invoke$arity$variadic = G__21415__delegate;
return G__21415;
})()
;

return null;
});
