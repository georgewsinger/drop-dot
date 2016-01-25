goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18738__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18739__i = 0, G__18739__a = new Array(arguments.length -  0);
while (G__18739__i < G__18739__a.length) {G__18739__a[G__18739__i] = arguments[G__18739__i + 0]; ++G__18739__i;}
  args = new cljs.core.IndexedSeq(G__18739__a,0);
} 
return G__18738__delegate.call(this,args);};
G__18738.cljs$lang$maxFixedArity = 0;
G__18738.cljs$lang$applyTo = (function (arglist__18740){
var args = cljs.core.seq(arglist__18740);
return G__18738__delegate(args);
});
G__18738.cljs$core$IFn$_invoke$arity$variadic = G__18738__delegate;
return G__18738;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18741__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18742__i = 0, G__18742__a = new Array(arguments.length -  0);
while (G__18742__i < G__18742__a.length) {G__18742__a[G__18742__i] = arguments[G__18742__i + 0]; ++G__18742__i;}
  args = new cljs.core.IndexedSeq(G__18742__a,0);
} 
return G__18741__delegate.call(this,args);};
G__18741.cljs$lang$maxFixedArity = 0;
G__18741.cljs$lang$applyTo = (function (arglist__18743){
var args = cljs.core.seq(arglist__18743);
return G__18741__delegate(args);
});
G__18741.cljs$core$IFn$_invoke$arity$variadic = G__18741__delegate;
return G__18741;
})()
;

return null;
});
