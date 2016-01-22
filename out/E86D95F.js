goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18001__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18002__i = 0, G__18002__a = new Array(arguments.length -  0);
while (G__18002__i < G__18002__a.length) {G__18002__a[G__18002__i] = arguments[G__18002__i + 0]; ++G__18002__i;}
  args = new cljs.core.IndexedSeq(G__18002__a,0);
} 
return G__18001__delegate.call(this,args);};
G__18001.cljs$lang$maxFixedArity = 0;
G__18001.cljs$lang$applyTo = (function (arglist__18003){
var args = cljs.core.seq(arglist__18003);
return G__18001__delegate(args);
});
G__18001.cljs$core$IFn$_invoke$arity$variadic = G__18001__delegate;
return G__18001;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18004__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18005__i = 0, G__18005__a = new Array(arguments.length -  0);
while (G__18005__i < G__18005__a.length) {G__18005__a[G__18005__i] = arguments[G__18005__i + 0]; ++G__18005__i;}
  args = new cljs.core.IndexedSeq(G__18005__a,0);
} 
return G__18004__delegate.call(this,args);};
G__18004.cljs$lang$maxFixedArity = 0;
G__18004.cljs$lang$applyTo = (function (arglist__18006){
var args = cljs.core.seq(arglist__18006);
return G__18004__delegate(args);
});
G__18004.cljs$core$IFn$_invoke$arity$variadic = G__18004__delegate;
return G__18004;
})()
;

return null;
});
