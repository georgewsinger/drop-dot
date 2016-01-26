goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26412__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26413__i = 0, G__26413__a = new Array(arguments.length -  0);
while (G__26413__i < G__26413__a.length) {G__26413__a[G__26413__i] = arguments[G__26413__i + 0]; ++G__26413__i;}
  args = new cljs.core.IndexedSeq(G__26413__a,0);
} 
return G__26412__delegate.call(this,args);};
G__26412.cljs$lang$maxFixedArity = 0;
G__26412.cljs$lang$applyTo = (function (arglist__26414){
var args = cljs.core.seq(arglist__26414);
return G__26412__delegate(args);
});
G__26412.cljs$core$IFn$_invoke$arity$variadic = G__26412__delegate;
return G__26412;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26415__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26416__i = 0, G__26416__a = new Array(arguments.length -  0);
while (G__26416__i < G__26416__a.length) {G__26416__a[G__26416__i] = arguments[G__26416__i + 0]; ++G__26416__i;}
  args = new cljs.core.IndexedSeq(G__26416__a,0);
} 
return G__26415__delegate.call(this,args);};
G__26415.cljs$lang$maxFixedArity = 0;
G__26415.cljs$lang$applyTo = (function (arglist__26417){
var args = cljs.core.seq(arglist__26417);
return G__26415__delegate(args);
});
G__26415.cljs$core$IFn$_invoke$arity$variadic = G__26415__delegate;
return G__26415;
})()
;

return null;
});
