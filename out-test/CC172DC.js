goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__135738__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__135738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135739__i = 0, G__135739__a = new Array(arguments.length -  0);
while (G__135739__i < G__135739__a.length) {G__135739__a[G__135739__i] = arguments[G__135739__i + 0]; ++G__135739__i;}
  args = new cljs.core.IndexedSeq(G__135739__a,0);
} 
return G__135738__delegate.call(this,args);};
G__135738.cljs$lang$maxFixedArity = 0;
G__135738.cljs$lang$applyTo = (function (arglist__135740){
var args = cljs.core.seq(arglist__135740);
return G__135738__delegate(args);
});
G__135738.cljs$core$IFn$_invoke$arity$variadic = G__135738__delegate;
return G__135738;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__135741__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__135741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135742__i = 0, G__135742__a = new Array(arguments.length -  0);
while (G__135742__i < G__135742__a.length) {G__135742__a[G__135742__i] = arguments[G__135742__i + 0]; ++G__135742__i;}
  args = new cljs.core.IndexedSeq(G__135742__a,0);
} 
return G__135741__delegate.call(this,args);};
G__135741.cljs$lang$maxFixedArity = 0;
G__135741.cljs$lang$applyTo = (function (arglist__135743){
var args = cljs.core.seq(arglist__135743);
return G__135741__delegate(args);
});
G__135741.cljs$core$IFn$_invoke$arity$variadic = G__135741__delegate;
return G__135741;
})()
;

return null;
});
