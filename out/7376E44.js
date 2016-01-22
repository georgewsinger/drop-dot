goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10705__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10706__i = 0, G__10706__a = new Array(arguments.length -  0);
while (G__10706__i < G__10706__a.length) {G__10706__a[G__10706__i] = arguments[G__10706__i + 0]; ++G__10706__i;}
  args = new cljs.core.IndexedSeq(G__10706__a,0);
} 
return G__10705__delegate.call(this,args);};
G__10705.cljs$lang$maxFixedArity = 0;
G__10705.cljs$lang$applyTo = (function (arglist__10707){
var args = cljs.core.seq(arglist__10707);
return G__10705__delegate(args);
});
G__10705.cljs$core$IFn$_invoke$arity$variadic = G__10705__delegate;
return G__10705;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10708__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10709__i = 0, G__10709__a = new Array(arguments.length -  0);
while (G__10709__i < G__10709__a.length) {G__10709__a[G__10709__i] = arguments[G__10709__i + 0]; ++G__10709__i;}
  args = new cljs.core.IndexedSeq(G__10709__a,0);
} 
return G__10708__delegate.call(this,args);};
G__10708.cljs$lang$maxFixedArity = 0;
G__10708.cljs$lang$applyTo = (function (arglist__10710){
var args = cljs.core.seq(arglist__10710);
return G__10708__delegate(args);
});
G__10708.cljs$core$IFn$_invoke$arity$variadic = G__10708__delegate;
return G__10708;
})()
;

return null;
});
