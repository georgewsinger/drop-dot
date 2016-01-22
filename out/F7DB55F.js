goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21540__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21541__i = 0, G__21541__a = new Array(arguments.length -  0);
while (G__21541__i < G__21541__a.length) {G__21541__a[G__21541__i] = arguments[G__21541__i + 0]; ++G__21541__i;}
  args = new cljs.core.IndexedSeq(G__21541__a,0);
} 
return G__21540__delegate.call(this,args);};
G__21540.cljs$lang$maxFixedArity = 0;
G__21540.cljs$lang$applyTo = (function (arglist__21542){
var args = cljs.core.seq(arglist__21542);
return G__21540__delegate(args);
});
G__21540.cljs$core$IFn$_invoke$arity$variadic = G__21540__delegate;
return G__21540;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21543__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21544__i = 0, G__21544__a = new Array(arguments.length -  0);
while (G__21544__i < G__21544__a.length) {G__21544__a[G__21544__i] = arguments[G__21544__i + 0]; ++G__21544__i;}
  args = new cljs.core.IndexedSeq(G__21544__a,0);
} 
return G__21543__delegate.call(this,args);};
G__21543.cljs$lang$maxFixedArity = 0;
G__21543.cljs$lang$applyTo = (function (arglist__21545){
var args = cljs.core.seq(arglist__21545);
return G__21543__delegate(args);
});
G__21543.cljs$core$IFn$_invoke$arity$variadic = G__21543__delegate;
return G__21543;
})()
;

return null;
});
