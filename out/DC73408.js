goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__170218__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__170218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170219__i = 0, G__170219__a = new Array(arguments.length -  0);
while (G__170219__i < G__170219__a.length) {G__170219__a[G__170219__i] = arguments[G__170219__i + 0]; ++G__170219__i;}
  args = new cljs.core.IndexedSeq(G__170219__a,0);
} 
return G__170218__delegate.call(this,args);};
G__170218.cljs$lang$maxFixedArity = 0;
G__170218.cljs$lang$applyTo = (function (arglist__170220){
var args = cljs.core.seq(arglist__170220);
return G__170218__delegate(args);
});
G__170218.cljs$core$IFn$_invoke$arity$variadic = G__170218__delegate;
return G__170218;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__170221__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__170221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170222__i = 0, G__170222__a = new Array(arguments.length -  0);
while (G__170222__i < G__170222__a.length) {G__170222__a[G__170222__i] = arguments[G__170222__i + 0]; ++G__170222__i;}
  args = new cljs.core.IndexedSeq(G__170222__a,0);
} 
return G__170221__delegate.call(this,args);};
G__170221.cljs$lang$maxFixedArity = 0;
G__170221.cljs$lang$applyTo = (function (arglist__170223){
var args = cljs.core.seq(arglist__170223);
return G__170221__delegate(args);
});
G__170221.cljs$core$IFn$_invoke$arity$variadic = G__170221__delegate;
return G__170221;
})()
;

return null;
});
