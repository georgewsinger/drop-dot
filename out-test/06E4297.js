goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12732__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12733__i = 0, G__12733__a = new Array(arguments.length -  0);
while (G__12733__i < G__12733__a.length) {G__12733__a[G__12733__i] = arguments[G__12733__i + 0]; ++G__12733__i;}
  args = new cljs.core.IndexedSeq(G__12733__a,0);
} 
return G__12732__delegate.call(this,args);};
G__12732.cljs$lang$maxFixedArity = 0;
G__12732.cljs$lang$applyTo = (function (arglist__12734){
var args = cljs.core.seq(arglist__12734);
return G__12732__delegate(args);
});
G__12732.cljs$core$IFn$_invoke$arity$variadic = G__12732__delegate;
return G__12732;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12735__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12736__i = 0, G__12736__a = new Array(arguments.length -  0);
while (G__12736__i < G__12736__a.length) {G__12736__a[G__12736__i] = arguments[G__12736__i + 0]; ++G__12736__i;}
  args = new cljs.core.IndexedSeq(G__12736__a,0);
} 
return G__12735__delegate.call(this,args);};
G__12735.cljs$lang$maxFixedArity = 0;
G__12735.cljs$lang$applyTo = (function (arglist__12737){
var args = cljs.core.seq(arglist__12737);
return G__12735__delegate(args);
});
G__12735.cljs$core$IFn$_invoke$arity$variadic = G__12735__delegate;
return G__12735;
})()
;

return null;
});
