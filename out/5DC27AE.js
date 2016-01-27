goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__311490__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__311490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__311491__i = 0, G__311491__a = new Array(arguments.length -  0);
while (G__311491__i < G__311491__a.length) {G__311491__a[G__311491__i] = arguments[G__311491__i + 0]; ++G__311491__i;}
  args = new cljs.core.IndexedSeq(G__311491__a,0);
} 
return G__311490__delegate.call(this,args);};
G__311490.cljs$lang$maxFixedArity = 0;
G__311490.cljs$lang$applyTo = (function (arglist__311492){
var args = cljs.core.seq(arglist__311492);
return G__311490__delegate(args);
});
G__311490.cljs$core$IFn$_invoke$arity$variadic = G__311490__delegate;
return G__311490;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__311493__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__311493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__311494__i = 0, G__311494__a = new Array(arguments.length -  0);
while (G__311494__i < G__311494__a.length) {G__311494__a[G__311494__i] = arguments[G__311494__i + 0]; ++G__311494__i;}
  args = new cljs.core.IndexedSeq(G__311494__a,0);
} 
return G__311493__delegate.call(this,args);};
G__311493.cljs$lang$maxFixedArity = 0;
G__311493.cljs$lang$applyTo = (function (arglist__311495){
var args = cljs.core.seq(arglist__311495);
return G__311493__delegate(args);
});
G__311493.cljs$core$IFn$_invoke$arity$variadic = G__311493__delegate;
return G__311493;
})()
;

return null;
});
