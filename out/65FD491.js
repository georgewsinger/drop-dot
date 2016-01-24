goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32295__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32296__i = 0, G__32296__a = new Array(arguments.length -  0);
while (G__32296__i < G__32296__a.length) {G__32296__a[G__32296__i] = arguments[G__32296__i + 0]; ++G__32296__i;}
  args = new cljs.core.IndexedSeq(G__32296__a,0);
} 
return G__32295__delegate.call(this,args);};
G__32295.cljs$lang$maxFixedArity = 0;
G__32295.cljs$lang$applyTo = (function (arglist__32297){
var args = cljs.core.seq(arglist__32297);
return G__32295__delegate(args);
});
G__32295.cljs$core$IFn$_invoke$arity$variadic = G__32295__delegate;
return G__32295;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32298__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32299__i = 0, G__32299__a = new Array(arguments.length -  0);
while (G__32299__i < G__32299__a.length) {G__32299__a[G__32299__i] = arguments[G__32299__i + 0]; ++G__32299__i;}
  args = new cljs.core.IndexedSeq(G__32299__a,0);
} 
return G__32298__delegate.call(this,args);};
G__32298.cljs$lang$maxFixedArity = 0;
G__32298.cljs$lang$applyTo = (function (arglist__32300){
var args = cljs.core.seq(arglist__32300);
return G__32298__delegate(args);
});
G__32298.cljs$core$IFn$_invoke$arity$variadic = G__32298__delegate;
return G__32298;
})()
;

return null;
});
