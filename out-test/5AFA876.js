goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62672__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62673__i = 0, G__62673__a = new Array(arguments.length -  0);
while (G__62673__i < G__62673__a.length) {G__62673__a[G__62673__i] = arguments[G__62673__i + 0]; ++G__62673__i;}
  args = new cljs.core.IndexedSeq(G__62673__a,0);
} 
return G__62672__delegate.call(this,args);};
G__62672.cljs$lang$maxFixedArity = 0;
G__62672.cljs$lang$applyTo = (function (arglist__62674){
var args = cljs.core.seq(arglist__62674);
return G__62672__delegate(args);
});
G__62672.cljs$core$IFn$_invoke$arity$variadic = G__62672__delegate;
return G__62672;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62675__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62676__i = 0, G__62676__a = new Array(arguments.length -  0);
while (G__62676__i < G__62676__a.length) {G__62676__a[G__62676__i] = arguments[G__62676__i + 0]; ++G__62676__i;}
  args = new cljs.core.IndexedSeq(G__62676__a,0);
} 
return G__62675__delegate.call(this,args);};
G__62675.cljs$lang$maxFixedArity = 0;
G__62675.cljs$lang$applyTo = (function (arglist__62677){
var args = cljs.core.seq(arglist__62677);
return G__62675__delegate(args);
});
G__62675.cljs$core$IFn$_invoke$arity$variadic = G__62675__delegate;
return G__62675;
})()
;

return null;
});
