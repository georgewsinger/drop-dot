goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12320__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12321__i = 0, G__12321__a = new Array(arguments.length -  0);
while (G__12321__i < G__12321__a.length) {G__12321__a[G__12321__i] = arguments[G__12321__i + 0]; ++G__12321__i;}
  args = new cljs.core.IndexedSeq(G__12321__a,0);
} 
return G__12320__delegate.call(this,args);};
G__12320.cljs$lang$maxFixedArity = 0;
G__12320.cljs$lang$applyTo = (function (arglist__12322){
var args = cljs.core.seq(arglist__12322);
return G__12320__delegate(args);
});
G__12320.cljs$core$IFn$_invoke$arity$variadic = G__12320__delegate;
return G__12320;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12323__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12324__i = 0, G__12324__a = new Array(arguments.length -  0);
while (G__12324__i < G__12324__a.length) {G__12324__a[G__12324__i] = arguments[G__12324__i + 0]; ++G__12324__i;}
  args = new cljs.core.IndexedSeq(G__12324__a,0);
} 
return G__12323__delegate.call(this,args);};
G__12323.cljs$lang$maxFixedArity = 0;
G__12323.cljs$lang$applyTo = (function (arglist__12325){
var args = cljs.core.seq(arglist__12325);
return G__12323__delegate(args);
});
G__12323.cljs$core$IFn$_invoke$arity$variadic = G__12323__delegate;
return G__12323;
})()
;

return null;
});
